import { handleLogin } from "../api/Authorize";
import { TextButton } from "../components/TextButton";
import spotifylogo from "../assets/spotify-logo.png";
import listifylogo from "../assets/gear.png";
import { TimeoutAlert } from "../components/TimeoutAlert";
import "./Login.less";

/**
 * The Login component renders the login page for Listify.
 *
 * It displays a rotating logo on the left side and a description of the app's features on the right side,
 * along with a "Login" button for users to log in using their Spotify account.
 * If the user’s session has expired, a timeout alert is shown.
 *
 * The component allows users to log in and create personalized playlists by adding up to 5 of their favorite
 * artists or songs. Once logged in, users can save their playlists directly to their Spotify account.
 *
 * @returns {JSX.Element} The rendered JSX element for the login page.
 *
 * @example
 * <Login />
 */
export function Login() {
  return (
    <div className="login_container">
      {localStorage.getItem("isTimeout") === "true" ? (
        <TimeoutAlert></TimeoutAlert>
      ) : (
        ""
      )}
      <div className="login_left">
        <div className="left_logo">
          <img src={listifylogo} alt="Rotating Logo" />
        </div>
      </div>
      <div className="login_right">
        <h1>
          Welcome to <span className="logintitle">Listify</span>
        </h1>
        <p className="desc">
          Create <strong>personalized playlists</strong> by adding up to{" "}
          <strong>5 of your favorite artists or songs</strong>, and let Listify
          generate the perfect mix just for you. Add these playlists directly to
          your <strong>Spotify account</strong>. Make your music truly yours
          with Listify!✨
        </p>
        <div className="row">
          <div className="login_button">
            <TextButton
              shadowType="do"
              onClick={handleLogin}
              text="Login"
              icon={spotifylogo}
            ></TextButton>
          </div>
          <div className="help-button">
            ?
            <p className="tooltip">
              Log in with Spotify to generate personalized playlists and save
              them to your account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
