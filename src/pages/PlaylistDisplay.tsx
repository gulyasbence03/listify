import { LogoTitle } from "../components/LogoTitle"
import logo from '../assets/gear.png'
import {useState } from "react";
import "./PlaylistDisplay.less"

interface PlaylistDisplayProps{
    playlistId?: string | null;
}

export function PlaylistDisplay({playlistId} : PlaylistDisplayProps){

    let [playName, setPlayName] = useState("My Playlist");


    /*
                            
            <div className="playlist_box">  
                <div>
                    <label htmlFor="title">Playlist name: </label>
                    <input type="text" id="title" className="playlist_title" 
                        value={playName}  onChange={e => setPlayName(e.target.value)}></input>
                </div>    

            
            </div>
    */
    return <>
            <div className="header">
                <LogoTitle logoPath={logo} title="Listify"></LogoTitle>
            </div>
            
        <div className="player_side">
            <div className="player">
                <iframe
                title="Spotify Embed: Recommendation Playlist "
                src={playlistId?`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`:''}
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