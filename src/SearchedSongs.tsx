import "./SearchedSongs.less"
import reactLogo from './assets/react.svg'

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
                    song=> (
                        <button>
                            <div className="one_song">
                                <img src={song[0]}/>
                                <div className="title_artist">
                                    <h3>{song[2]}</h3>
                                    <h4>{song[1]}</h4>
                                </div>
                                <p>{song[3]}</p>
                            </div>
                        </button>
                        
                        
                    )
                )}
                
            </div>
        </div>
        
    );
}