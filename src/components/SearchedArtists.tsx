import { Artist, SelectedType } from "../tools/Types";
import { OneArtist } from "./OneArtist";
import "./SearchedArtists.less"

interface SearchedArtistsProps{
    artistsSearched: Artist[];
    addToList: (selected: SelectedType[])=>void;
    selectedList: SelectedType[];
}

  export function SearchedArtists({ artistsSearched, addToList, selectedList }: SearchedArtistsProps) {
    return (

        <div className="artist_container">
        <h2>Artists</h2>
        {artistsSearched.length > 0 ? (
            <div className="artists_row">
            {artistsSearched.map((artist: Artist) => (
                <OneArtist  key={artist.id} artist={artist} addToList={addToList} selectedList={selectedList}></OneArtist>
            ))}
            </div>
        ) : (
            <div className="searchfor">
                <h4>Search for artists..</h4>
            </div>
        )}
        </div>

    );
  }