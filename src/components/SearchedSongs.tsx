import { OneSong } from "./OneSong";
import "./SearchedSongs.less"

interface Track{
    id : string;
    name: string;
    duration_ms: number;
    artists: string[];
    image: string
}


export function SearchedSongs({ tracksSearched }: { tracksSearched: Track[] }) {
    return (
        <div className="song_container">
            <h2>Songs</h2>
            {tracksSearched.length > 0 ? (
                <div className="song_col">
                {tracksSearched.map((track) => (
                    <div key={track.id}>
                    <OneSong
                        imagePath={track.image}
                        artists={track.artists}
                        title={track.name}
                        length_ms={track.duration_ms}
                    />
                    </div>
                ))}
                </div>
            ) : (
                <div className="searchfor">
                    <h4>Search for songs..</h4>
                </div>
            )}
        </div>

        
    );
}