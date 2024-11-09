import "./SearchedArtists.less"
//import { useState, useEffect } from "react";
import reactLogo from './assets/react.svg'

export function SearchedArtists() {
    /*
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        fetch('https://api.spotify.com/v1/search?q=' + 'Manuel' + '&' + 'type=' + 'artist' + 'limit=' + "5")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setArtists(data);
        });
    },[]);
    */

    const artists = [[reactLogo,"Azahriah"],[reactLogo,"Desh"],[reactLogo,"TDanny"],[reactLogo,"Manuel"],[reactLogo,"Valmar"],[reactLogo,"KKevin"]];
    return (
        <div className="artist_container">
            <h2>Artists</h2>
            <div className='artists_row' >
                {artists.map(
                    artist=> (
                        <div className="one_artist">
                            <img src={artist[0]}/>
                            <h3>{artist[1]}</h3>
                        </div>
                        
                    )
                )}
                
            </div>
        </div>
        
    );
}