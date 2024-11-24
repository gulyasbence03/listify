import { LogoTitle } from "../components/LogoTitle"
import { OneSong } from "../components/OneSong";
import logo from '../assets/gear.png'
import "./PlaylistDisplay.less"
import { useEffect, useState } from "react";

export function PlaylistDisplay(){

    let [playName, setPlayName] = useState("My Playlist");
    
    const playlistId = '5y5yTj3yr362mUjFe6xLRn';

    return <>
        <div className="playlist_side">
            <div className="header">
                <LogoTitle logoPath={logo} title="Listify"></LogoTitle>
            </div>
                
            
            <div className="playlist_box">  
                <div>
                    <label htmlFor="title">Playlist name: </label>
                    <input type="text" id="title" className="playlist_title" 
                        value={playName}  onChange={e => setPlayName(e.target.value)}></input>
                </div>    

            
            </div>

        </div>
        <div className="player_side">
            <div className="player">
                <iframe
                title="Spotify Embed: Recommendation Playlist "
                src={`https://open.spotify.com/embed/playlist/5y5yTj3yr362mUjFe6xLRn?utm_source=generator&theme=0`}
                width="100%"
                height="100%"
                style={{ minHeight: '360px' }}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                />
            </div>
        </div>

    
    </>

}