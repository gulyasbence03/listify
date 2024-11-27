import { BASEURL, logOutOnError } from "./BaseAPI";

/**
 * Fetches the top tracks for a given artist.
 *
 * @param artistId - The Spotify ID of the artist whose top tracks are to be fetched.
 * @returns A promise that resolves to the response JSON containing the artist's top tracks.
 * 
 * @throws Logs an error to the console if the request fails.
 * 
 * @remarks
 * - The function uses the Spotify API to fetch the top tracks of an artist.
 * - It retrieves an `access_token` from local storage for authentication.
 * - If the response status is `401`, it invokes `logOutOnError` to handle authentication errors.
 *
 * @example
 * ```typescript
 * const topTracks = await getTopTracks("1dfeR4HaWDbWqFHLkxsg1d");
 * console.log("Top tracks:", topTracks);
 * ```
 */
export const getTopTracks = async (artistId: string) => {
    const token = localStorage.getItem("access_token");
      try {
        const response = await fetch(
          `${BASEURL}/artists/${artistId}/top-tracks`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if(response.status === 401){
          logOutOnError();
        }
        return response.json();
      }
    catch(error){
      console.log(error);
    }
  };