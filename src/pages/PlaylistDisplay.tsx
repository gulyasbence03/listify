import { LogoTitle } from "../components/LogoTitle"
import { OneSong } from "../components/OneSong";
import reactLogo from '../assets/react.svg'
import "./PlaylistDisplay.less"
import { useEffect, useState } from "react";

export function PlaylistDisplay(){

    const songs = [[reactLogo,"Pogány Induló","EGY/KETTŐ","4:59"],
                    [reactLogo,"Desh","SUV","1:49"],
                    [reactLogo,"TDanny","VIDÉKI CSAJSZI","3:09"],
                    [reactLogo,"Manuel", "Voodoo Baba","2:34"],
                    [reactLogo,"Valmar", "Valencia","2:55"],
                    [reactLogo,"KKevin","Cartier","2:30"],
                    [reactLogo,"Pogány Induló","EGY/KETTŐ","4:59"],
                    [reactLogo,"Desh","SUV","1:49"],
                    [reactLogo,"TDanny","VIDÉKI CSAJSZI","3:09"],
                    [reactLogo,"Manuel", "Voodoo Baba","2:34"],
                    [reactLogo,"Valmar", "Valencia","2:55"],
                    [reactLogo,"KKevin","Cartier","2:30"],
                    [reactLogo,"Pogány Induló","EGY/KETTŐ","4:59"],
                    [reactLogo,"Desh","SUV","1:49"],
                    [reactLogo,"TDanny","VIDÉKI CSAJSZI","3:09"],
                    [reactLogo,"Manuel", "Voodoo Baba","2:34"],
                    [reactLogo,"Valmar", "Valencia","2:55"],
                    [reactLogo,"KKevin","Cartier","2:30"]
                ];

    let [playName, setPlayName] = useState("My Playlist");
    
    const playlistId = '5y5yTj3yr362mUjFe6xLRn';

    return <>
        <div className="playlist_side">
            <div className="header">
                <LogoTitle logoPath={reactLogo} title="Listify"></LogoTitle>
            </div>
                
            
            <div className="playlist_box">      
                <input type="text" className="playlist_title" 
                    value={playName}  onChange={e => setPlayName(e.target.value)}></input>
                
                <div className="playlist_container">
                    {songs.map(
                        (song,index)=> (
                            <div className="one_line" key={index + song[0]}>
                                <span>#{index+1}</span>
                                <OneSong imagePath={song[0]} artist={song[1]} title={song[2]} length={song[3]}></OneSong>
                            </div>
                        )
                    )}
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