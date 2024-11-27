import { Track, SelectedType } from "../tools/Types";
import { OneSong } from "./OneSong";
import "./SearchedSongs.less";

/**
 * Props for the `SearchedSongs` component.
 * This interface defines the properties passed to the `SearchedSongs` component, including the
 * list of songs that have been searched, a function to add selected items to a list,
 * and the current list of selected items.
 *
 * @interface SearchedSongsProps
 * @property {Track[]} tracksSearched - Array of tracks that match the search query.
 * @property {Function} addToList - A function to add selected items to the list of selected songs.
 * @property {SelectedType[]} selectedList - Array of currently selected items, including songs.
 */
interface SearchedSongsProps {
  tracksSearched: Track[];
  addToList: (selected: SelectedType[]) => void;
  selectedList: SelectedType[];
}

/**
 * A component that displays a list of searched songs. If songs are found,
 * it maps through them and renders the `OneSong` component for each. If no songs are found,
 * it shows a message prompting the user to search for songs.
 *
 * @component
 * @param {SearchedSongsProps} props - The properties passed to the component, including the songs,
 *                                        a function to add to the list, and the selected list.
 * @returns {JSX.Element} The rendered list of songs or a search prompt.
 */
export function SearchedSongs({
  tracksSearched,
  addToList,
  selectedList,
}: SearchedSongsProps) {
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
                artistsIds={track.artistIds}
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
