import { BASEURL, logOutOnError } from "./BaseAPI";


/**
 * Fetches the user profile of the currently authenticated user and returns the user data.
 *
 * @returns A promise that resolves to the user profile JSON containing the user's ID and other information.
 * 
 * @throws Logs an error to the console if the request fails.
 * 
 * @remarks
 * - The function uses the Spotify API to retrieve the profile of the current user.
 * - It retrieves an `access_token` from local storage for authentication.
 * - If the response status is `401`, it invokes `logOutOnError` to handle authentication errors.
 *
 * @example
 * ```typescript
 * const user = await getUserId();
 * console.log(`User ID: ${user.id}`);
 * ```
 */
export const getUserId = async () => {
    const token = localStorage.getItem("access_token");
      try {
        const response = await fetch(
          `${BASEURL}/me`,
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