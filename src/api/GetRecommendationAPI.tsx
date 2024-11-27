import { BASEURL, logOutOnError } from "./BaseAPI";

/**
 * Fetches music recommendations based on the provided artists and tracks.
 *
 * @param limit - The maximum number of recommendations to fetch.
 * @param artists - An array of artist IDs used as seeds for recommendations.
 * @param tracks - An array of track IDs used as seeds for recommendations.
 * @returns A promise that resolves to the response JSON containing the recommended tracks.
 *
 * @throws Logs an error to the console if the request fails.
 *
 * @remarks
 * - The function uses the Spotify API to generate personalized recommendations.
 * - It retrieves an `access_token` from local storage for authentication.
 * - If the response status is `401`, it invokes `logOutOnError` to handle the error.
 * - The `artists` and `tracks` arrays are joined into comma-separated strings to form the query parameters.
 *
 * @example
 * ```typescript
 * const recommendations = await getRecommendation(
 *   10,
 *   ["4NHQUGzhtTLFvgF5SZesLK"],
 *   ["0c6xIDDpzE81m2q797ordA"]
 * );
 * console.log(recommendations);
 * ```
 */
/*
--------------------------------------
DEPRECATED 2024.11.27 :((((
export const getRecommendation = async (limit: number, artists: string[], tracks : string[]) => {
  const token = localStorage.getItem("access_token");
    try {
      const response = await fetch(
        `${BASEURL}/recommendations?limit=${limit}&seed_artists=${artists.join(",")}&seed_tracks=${tracks.join(",")}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if(response.status === 401){
        logOutOnError();
      }
      console.log(response)
      return response.json();
    }
  catch(error){
    console.log(error);
  }
};
------------------------------------
*/
export const getRecommendation = async (limit: number, artists: string[], tracks : string[]) => {
  const token = localStorage.getItem("access_token");
    try {
      const response = await fetch(
        `${BASEURL}/recommendations?limit=${limit}&seed_artists=${artists.join(",")}&seed_tracks=${tracks.join(",")}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if(response.status === 401){
        logOutOnError();
      }
      console.log(response)
      return response.json();
    }
  catch(error){
    console.log(error);
  }
};
