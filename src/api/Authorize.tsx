const REDIRECT = "http://localhost:5173/";
const CLINET_ID = "6d69e2b752074234ad67d41369f88ede";
const AUTHORIZE = "https://accounts.spotify.com/authorize";
const SCOPES = ["playlist-read-private", "playlist-modify-private", "playlist-modify-public"];
const SCOPES_URL_PARAM = SCOPES.join("%20");


/**
 * Extracts and handles the Spotify access token from the URL hash fragment.
 *
 * @remarks
 * - Parses the access token from the URL hash and stores it in `localStorage`.
 * - Logs a confirmation message if the token is successfully saved.
 * - Typically called after the user is redirected back from Spotify's authorization page.
 *
 * @example
 * ```typescript
 * // Call this function on page load to handle token after redirection.
 * handleToken();
 * ```
 */
export const handleToken = () => {
    const hash = window.location.hash; // Get the hash from the URL
    const params = new URLSearchParams(hash.substring(1)); // Remove the '#' and parse
    const token = params.get('access_token'); // Get the access token
    if (token) {
        localStorage.setItem('access_token', token); // Store token if needed
        console.log("Access Token Saved");
    }
};

/**
 * Redirects the user to Spotify's authorization page to log in and authorize the application.
 *
 * @remarks
 * - Constructs the authorization URL with the required parameters, including the client ID, redirect URI, scopes, and response type.
 * - Initiates the authorization process by setting `window.location.href` to the constructed URL.
 * - After login, Spotify redirects the user back to the specified redirect URI with an access token in the URL hash.
 *
 * @example
 * ```typescript
 * // Trigger login and authorization flow.
 * handleLogin();
 * ```
 */
export const handleLogin = () => {
    window.location.href = `${AUTHORIZE}?client_id=${CLINET_ID}&redirect_uri=${REDIRECT}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
};
