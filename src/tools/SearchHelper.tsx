import { getArtists } from "../api/GetArtistAPI";
import { getTracks } from "../api/GetTracksAPI";
import { Artist, ArtistItem, Track, TrackItem } from "./Types";
import reactLogo from "../assets/react.svg";

/**
 * Searches for artists based on a query and updates the state with the results.
 *
 * This function takes a search query, fetches artist data from an API, processes the response, and updates the
 * provided state with an array of artists. The artist data includes the artist's id, name, and image.
 *
 * @param {string} query - The search query used to find artists.
 * @param {(artists: Artist[]) => void} setArtistsSearched - A function that sets the state with the list of artists.
 *
 * @returns {Promise<void>} A promise that resolves when the search and state update are complete.
 */
export const searchArtistsHelper = async (
  query: string,
  setArtistsSearched: (artists: Artist[]) => void
) => {
  const response = await getArtists(query);
  const artists = response.artists.items.map((artist: ArtistItem) => ({
    id: artist.id,
    name: artist.name,
    images: artist.images?.[0]?.url || reactLogo,
  }));
  setArtistsSearched(artists);
};

/**
 * Searches for tracks based on a query and updates the state with the results.
 *
 * This function takes a search query, fetches track data from an API, processes the response, and updates the
 * provided state with an array of tracks. Each track includes the track's id, name, duration, associated artists,
 * album image, and artist IDs.
 *
 * @param {string} query - The search query used to find tracks.
 * @param {(tracks: Track[]) => void} setTracksSearched - A function that sets the state with the list of tracks.
 *
 * @returns {Promise<void>} A promise that resolves when the search and state update are complete.
 */
export const searchTracksHelper = async (
  query: string,
  setTracksSearched: (tracks: Track[]) => void
) => {
  const response = await getTracks(query);
  const tracks = response.tracks.items.map((track: TrackItem) => ({
    id: track.id,
    name: track.name,
    duration_ms: track.duration_ms,
    artists: track.artists?.map((artist) => artist.name) || [],
    image: track.album.images?.[0]?.url || reactLogo,
    artistIds: track.artists?.map((artist) => artist.id) || [],
  }));
  setTracksSearched(tracks);
};
