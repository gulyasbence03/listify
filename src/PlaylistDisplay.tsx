import { LogoTitle } from "./LogoTitle"
import { OneSong } from "./OneSong";
import reactLogo from './assets/react.svg'
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
    return <>
        <div className="playlist_side">
            <div className="header">
                <LogoTitle logoPath={reactLogo} title="Listify"></LogoTitle>
                <input type="text" className="playlist_title" 
                value={playName}  onChange={e => setPlayName(e.target.value)}></input>
            </div>
                
            

            <div className="playlist_container">
                {songs.map(
                    song=> (
                        <OneSong imagePath={song[0]} artist={song[1]} title={song[2]} length={song[3]}></OneSong>
                    )
                )}
            </div>
        </div>

    
    </>

}