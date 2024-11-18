import { OneSong } from "./OneSong";
import "./SearchedSongs.less"
import reactLogo from '../assets/react.svg'

export function SearchedSongs() {

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
    return (
        <div className="song_container">
            <h2>Songs</h2>
            <div className='song_col'>
                {songs.map(
                    (song,idx)=> (
                        <div key={idx+song[0]}>
                            <OneSong imagePath={song[0]} artist={song[1]} title={song[2]} length={song[3]}></OneSong>
                        </div>
                        
                    )
                )}
                
            </div>
        </div>
        
    );
}