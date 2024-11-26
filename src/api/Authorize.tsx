const REDIRECT = "http://localhost:5173/";
const CLINET_ID = "6d69e2b752074234ad67d41369f88ede";
const AUTHORIZE = "https://accounts.spotify.com/authorize";
const SCOPES = ["playlist-read-private", "playlist-modify-private", "playlist-modify-public"];
const SCOPES_URL_PARAM = SCOPES.join("%20");

export const handleToken = () => {
    const hash = window.location.hash; // Get the hash from the URL
    const params = new URLSearchParams(hash.substring(1)); // Remove the '#' and parse
    const token = params.get('access_token'); // Get the access token
    if (token) {
        localStorage.setItem('access_token', token); // Store token if needed
        console.log("Access Token Saved");
    }
};

export const handleLogin = () => {
    window.location.href = `${AUTHORIZE}?client_id=${CLINET_ID}&redirect_uri=${REDIRECT}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
};
