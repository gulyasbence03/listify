import { BASEURL, logOutOnError } from "./BaseAPI";

/**
 * Fetches a list of artists based on the given search query.
 *
 * @param searchQuery - The search term used to find artists.
 * @returns A promise that resolves to the response JSON containing the artist data.
 * 
 * @throws Logs an error to the console if the request fails.
 * 
 * @remarks
 * - The function uses the Spotify API to search for artists.
 * - It retrieves an `access_token` from local storage for authentication.
 * - If the response status is `401`, it invokes `logOutOnError` to handle the error.
 *
 * @example
 * ```typescript
 * const artists = await getArtists("Coldplay");
 * console.log(artists);
 * ```
 */
export const getArtists = async (searchQuery: string) => {

    const token = localStorage.getItem("access_token");
      try {
        const response = await fetch(
          `${BASEURL}/search?q=${searchQuery}&type=artist&limit=9`,
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