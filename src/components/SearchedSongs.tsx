import { SelectedType } from "../App";
import { OneSong } from "./OneSong";
import "./SearchedSongs.less"

interface Track{
    id : string;
    name: string;
    duration_ms: number;
    artists: string[];
    image: string
}

interface SearchedSongsProps{
    tracksSearched: Track[];
    addToList: (selected: SelectedType[])=>void;
    selectedList: SelectedType[];
}

export function SearchedSongs({ tracksSearched, addToList, selectedList} : SearchedSongsProps) {
    return (
        <div className="song_container">
            <h2>Songs</h2>
            {tracksSearched.length > 0 ? (
                <div className="song_col">
                {tracksSearched.map((track) => (
                    <div key={track.id}>
                    <OneSong
                        id={track.id}
                        imagePath={track.image}
                        artists={track.artists}
                        title={track.name}
                        length_ms={track.duration_ms}
                        addToList={addToList}
                        selectedList={selectedList}
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