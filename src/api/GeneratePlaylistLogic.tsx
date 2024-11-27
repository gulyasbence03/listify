
import { removeDuplicates, shuffleArray } from '../tools/arrayUtils';
import { SelectedType, Track } from '../tools/Types';
import { createPlaylist } from './CreateGeneratedPlaylistAPI';
import { getRecommendation } from './GetRecommendationAPI';
import { getTopTracks } from './GetTopTracksAPI';

/**
 * Parameters for the `handleGenerate` function.
 *
 * @interface GenerateParameters
 * @property {SelectedType[]} selected - An array of selected items, either songs or artists.
 * @property {(isReady: boolean) => void} setIsPlayListReady - Function to update the playlist readiness state.
 * @property {(generated: string | null) => void} setGenerated - Function to update the generated playlist ID or null on failure.
 */
interface GenerateParameters{
    selected: SelectedType[];
    setIsPlayListReady: (isReady: boolean) => void;
    setGenerated: (generated: string | null) => void;
}

/**
 * Generates a Spotify playlist based on the selected songs and artists.
 *
 * @param {GenerateParameters} params - Parameters for generating the playlist.
 * @param {SelectedType[]} params.selected - List of selected songs and artists to base the playlist on.
 * @param {(isReady: boolean) => void} params.setIsPlayListReady - Updates the readiness state of the playlist.
 * @param {(generated: string | null) => void} params.setGenerated - Updates the generated playlist ID or `null` on failure.
 *
 * @returns {Promise<void>} A promise that resolves when the playlist generation process is complete.
 *
 * @remarks
 * - Collects song IDs and artist IDs from the selected items.
 * - Fetches recommendations and top tracks for artists, combines the results, and removes duplicates.
 * - Shuffles the tracks and creates a playlist on Spotify.
 * - Updates the state with the playlist ID upon success or logs an error on failure.
 *
 * @example
 * ```typescript
 * const params: GenerateParameters = {
 *   selected: [{ type: 'song', id: '123', artistsIds: ['456'] }],
 *   setIsPlayListReady: (isReady) => console.log(isReady),
 *   setGenerated: (playlistId) => console.log(playlistId),
 * };
 * await handleGenerate(params);
 * ```
 */
export const handleGenerate = async ({selected, setIsPlayListReady, setGenerated}:GenerateParameters) => {
    setIsPlayListReady(true);
    const songIds: string[] = [];
    let genArtistIds: string[] = [];
    const topArtistIds: string[] = [];

    if (selected?.length > 0) {
      selected.forEach((item) => {
        if (item.type === 'song') {
          songIds.push(item.id);
          item.artistsIds?.map((artId: string)=>{topArtistIds.push(artId)});
          
        } else {
          genArtistIds.push(item.id);
        }
      });

      try {
        genArtistIds =  removeDuplicates(genArtistIds);

        const response = await getRecommendation(15, genArtistIds, songIds);
        let generatedUris : string[] = response?.tracks.map(
          (track : Track) => `spotify:track:${track.id}`
        )
        genArtistIds = genArtistIds.concat(topArtistIds);
        await Promise.all(
          genArtistIds.map(async artistId => {
            const topFives = await getTopTracks(artistId);
            topFives?.tracks.forEach((track: Track) => {
              generatedUris.push(`spotify:track:${track.id}`);
            });
          })
        );

        generatedUris =  removeDuplicates(generatedUris);
        generatedUris = shuffleArray(generatedUris);

        const resp = await createPlaylist(generatedUris, "Listify Playlist", false);
        setGenerated(resp?resp:null);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    }
  };