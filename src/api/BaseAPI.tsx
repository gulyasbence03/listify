/**
 * Base URL for the Spotify Web API.
 * 
 * @remarks
 * - This constant is used as the root endpoint for all Spotify API requests.
 * - Combine this with specific API paths to construct complete request URLs.
 *
 * @example
 * ```typescript
 * const searchEndpoint = `${BASEURL}/search`;
 * const artistEndpoint = `${BASEURL}/artists/{id}`;
 * ```
 */
export const BASEURL = `https://api.spotify.com/v1`;

/**
 * Handles user logout when an error occurs, such as an expired or invalid token.
 *
 * @remarks
 * - Sets a flag in local storage (`isTimeout`) to indicate a timeout event occurred.
 * - Removes the user's access token from local storage.
 * - Redirects the user to the application homepage or login screen.
 *
 * @example
 * ```typescript
 * if (response.status === 401) {
 *   logOutOnError();
 * }
 * ```
 */
export const logOutOnError = ()=>{
  localStorage.setItem("isTimeout","true");
  localStorage.removeItem("access_token");
  location.href = "http://localhost:5173/";
}