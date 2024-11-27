import { Artist, SelectedType } from "../tools/Types";
import { OneArtist } from "./OneArtist";
import "./SearchedArtists.less";

/**
 * Props for the `SearchedArtists` component.
 * This interface defines the properties passed to the `SearchedArtists` component, including the
 * list of artists that have been searched, a function to add selected items to a list,
 * and the current list of selected items.
 *
 * @interface SearchedArtistsProps
 * @property {Artist[]} artistsSearched - Array of artists that match the search query.
 * @property {Function} addToList - A function to add selected items to the list of selected artists.
 * @property {SelectedType[]} selectedList - Array of currently selected items, including artists.
 */
interface SearchedArtistsProps {
  artistsSearched: Artist[];
  addToList: (selected: SelectedType[]) => void;
  selectedList: SelectedType[];
}

/**
 * A component that displays a list of searched artists. If artists are found,
 * it maps through them and renders the `OneArtist` component for each. If no artists are found,
 * it shows a message prompting the user to search for artists.
 *
 * @component
 * @param {SearchedArtistsProps} props - The properties passed to the component, including the artists,
 *                                        a function to add to the list, and the selected list.
 * @returns {JSX.Element} The rendered list of artists or a search prompt.
 */
export function SearchedArtists({
  artistsSearched,
  addToList,
  selectedList,
}: SearchedArtistsProps) {
  return (
    <div className="artist_container">
      <h2>Artists</h2>
      {artistsSearched.length > 0 ? (
        <div className="artists_row">
          {artistsSearched.map((artist: Artist) => (
            <OneArtist
              key={artist.id}
              artist={artist}
              addToList={addToList}
              selectedList={selectedList}
            ></OneArtist>
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
