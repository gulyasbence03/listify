import { createPlaylist, getRecommendation, getTopFive } from '../api/API';
import { removeDuplicates, shuffleArray } from '../tools/arrayUtils';
import { SelectedType, Track } from '../tools/Types';

interface GenerateParameters{
    selected: SelectedType[];
    setIsPlayListReady: (isReady: boolean) => void;
    setGenerated: (generated: string | null) => void;
}

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
            const topFives = await getTopFive(artistId);
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