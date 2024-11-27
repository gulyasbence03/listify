import { LogoTitle } from "../components/LogoTitle";
import logo from "../assets/gear.png";
import { useState } from "react";
import "./PlaylistDisplay.less";

/**
 * Props for the PlaylistDisplay component.
 *
 * This interface defines the expected properties for the PlaylistDisplay component, specifically the optional `playlistId`.
 * The `playlistId` is used to display a specific Spotify playlist embedded in an iframe.
 * If the `playlistId` is not provided, the component will render an empty iframe (i.e., no playlist will be displayed).
 *
 * @interface PlaylistDisplayProps
 *
 * @property {string | null | undefined} [playlistId] - The ID of the playlist to be displayed in the Spotify iframe.
 * If not provided, no playlist will be shown.
 */
interface PlaylistDisplayProps {
  playlistId?: string | null;
}

/**
 * The PlaylistDisplay component renders a playlist embedded from Spotify.
 *
 * It accepts an optional `playlistId` prop, which is used to embed the specific playlist using an iframe from Spotify.
 * If the `playlistId` is provided, the component will render the playlist in an iframe. If not, the iframe will not be rendered.
 * This component also includes a header with the logo and title of the app.
 *
 * @param {PlaylistDisplayProps} props - The props for the component.
 * @param {string | null | undefined} [props.playlistId] - The ID of the playlist to be displayed. If not provided, no playlist is shown.
 *
 * @returns {JSX.Element} The rendered JSX element for displaying the embedded playlist.
 *
 * @example
 * <PlaylistDisplay playlistId="3dWZ4hKDqOhyY5cAmxeK55" />
 */
export function PlaylistDisplay({ playlistId }: PlaylistDisplayProps) {
  /*
    let [playName, setPlayName] = useState("My Playlist");
                            
        <div className="playlist_box">  
            <div>
                <label htmlFor="title">Playlist name: </label>
                <input type="text" id="title" className="playlist_title" 
                    value={playName}  onChange={e => setPlayName(e.target.value)}></input>
            </div>    

        
        </div>
    */
  return (
    <>
      <div className="header">
        <LogoTitle logoPath={logo} title="Listify"></LogoTitle>
      </div>

      <div className="player_side">
        <div className="player">
          <iframe
            title="Spotify Embed: Recommendation Playlist "
            src={
              playlistId
                ? `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`
                : ""
            }
            width="100%"
            height="100%"
            style={{ minHeight: "360px" }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
