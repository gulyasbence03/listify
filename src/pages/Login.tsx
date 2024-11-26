import { handleLogin } from '../api/Authorize'
import { TextButton } from '../components/TextButton'
import spotifylogo from "../assets/spotify-logo.png"
import listifylogo from "../assets/gear.png"
import { TimeoutAlert } from '../components/TimeoutAlert'
import "./Login.less"

export function Login(){
    return <div className='login_container'>
        {(localStorage.getItem("isTimeout") === "true")?<TimeoutAlert></TimeoutAlert>:""}
        <div className='login_left'>
            <div className='left_logo'>
                <img src={listifylogo} alt="Rotating Logo" />
            </div>
        </div>
        <div className='login_right'>
        <h1>Welcome to <span className='logintitle'>Listify</span></h1>
        <p className='desc'>Create <strong>personalized playlists</strong> by adding up to <strong>5 of your favorite artists or songs</strong>, and let Listify generate the perfect mix just for you. 
        Add these playlists directly to your <strong>Spotify account</strong>.
        Make your music truly yours with Listify!✨</p>
            <div className='row'>
                <div className='login_button'>
                    <TextButton shadowType='do' onClick={handleLogin} text="Login" icon={spotifylogo}></TextButton>
                </div>
                <div className="help-button">
                    ?
                    <p className="tooltip">Log in with Spotify to generate personalized playlists and save them to your account.</p>
                </div>
            </div>

        </div>
    </div>

}