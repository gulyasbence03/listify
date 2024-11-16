import reactLogo from './assets/react.svg'
import { LogoTitle } from './LogoTitle'
import { SearchBar } from './SearchBar'
import { SearchedArtists } from './SearchedArtists'
import { SearchedSongs } from './SearchedSongs'
import { SelectedFive } from './SelectedFive'
import { TextButton } from './TextButton'
import './App.less'

interface GeneratorProps{
    onGenerate: ()=> void
}

export function Generator({onGenerate}: GeneratorProps){

    const REDIRECT = "http://localhost:5173/";
    const CLINET_ID = "6d69e2b752074234ad67d41369f88ede";
    const AUTHORIZE = "https://accounts.spotify.com/authorize";
    const SCOPES = ["playlist-read-private", "playlist-modify-private", "playlist-modify-public"];
    const SCOPES_URL_PARAM = SCOPES.join("%20");

    const handleLogin = () => {
        window.location.href = `${AUTHORIZE}?client_id=${CLINET_ID}&redirect_uri=${REDIRECT}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    };

    const hash = window.location.hash; // Get the hash from the URL
    const params = new URLSearchParams(hash.substring(1)); // Remove the '#' and parse
    const token = params.get('access_token'); // Get the access token
    if (token) {
        localStorage.setItem('spotifyAccessToken', token); // Store token if needed
        console.log("Access Token:", token);
    }

    return <>
        <div className='left'>
            <div className='top_bar'>
                <LogoTitle logoPath={reactLogo} title='Listify'></LogoTitle>
                <SearchBar></SearchBar>
            <div className='login_button'>
                <TextButton onClick={handleLogin} text="Login"></TextButton>
            </div>
            </div>
            <SearchedArtists></SearchedArtists>
            <SearchedSongs></SearchedSongs>
        </div>
        
        <div className='right'>
            <SelectedFive></SelectedFive>
            <div className='generate_button'>
            <TextButton onClick={onGenerate} text='Generate'></TextButton>
            </div>
        </div>
    </>

}