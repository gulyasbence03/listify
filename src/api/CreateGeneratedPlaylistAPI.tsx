import { BASEURL, logOutOnError } from "./BaseAPI";

/**
 * Creates a new playlist for the current user, adds tracks to it, and returns the playlist ID.
 *
 * @param tracks - An array of track URIs to be added to the playlist.
 * @param playlist_name - The name of the new playlist.
 * @param isPublic - A boolean indicating whether the playlist should be public.
 * @returns A promise that resolves to the ID of the created playlist.
 * 
 * @throws Logs an error to the console if the request fails.
 * 
 * @remarks
 * - The function uses the Spotify API to create a playlist and add tracks to it.
 * - It retrieves the user ID of the currently authenticated user.
 * - The `access_token` is fetched from local storage for authorization.
 * - If the response status is `401`, the function invokes `logOutOnError` to handle authentication errors.
 *
 * @example
 * ```typescript
 * const playlistID = await createPlaylist(
 *   ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"],
 *   "My Favorite Tracks",
 *   true
 * );
 * console.log(`Playlist created with ID: ${playlistID}`);
 * ```
 */
export const createPlaylist = async (tracks : string[], playlist_name:string, isPublic: boolean) => {
    const token = localStorage.getItem("access_token");
      try {
        const headers = { Authorization: `Bearer ${token}` };
        let userID : string;
        let playlistID: string = "";
        const result = await fetch(`${BASEURL}/me`, { headers: headers })
        .then((response) => response.json())
        .then((jsonResponse) => {
          userID = jsonResponse.id;
          return fetch(`${BASEURL}/users/${userID}/playlists`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({ name: playlist_name, public: isPublic, description: "Generated by Listify" }),
          })
            .then((response) => response.json())
            .then((jsonResponse) => {
            playlistID = jsonResponse.id;
              return fetch(
                `${BASEURL}/users/${userID}/playlists/${playlistID}/tracks`,
                {
                  method: 'POST',
                  headers: headers,
                  body: JSON.stringify({ uris: tracks }),
                }
              );
            });
        });
  
        if(result.status === 401){
          logOutOnError();
        }
        return playlistID;
      }
    catch(error){
      console.log(error);
    }
  };