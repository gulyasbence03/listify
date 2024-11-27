import { SelectedType } from "../tools/Types";
import "./OneSong.less";

/**
 * The properties for the `OneSong` component.
 *
 * @interface OneSongProps
 * @property {string} id - The ID of the song.
 * @property {string} imagePath - The image URL for the song.
 * @property {string} title - The title of the song.
 * @property {string[]} artists - An array of artist names for the song.
 * @property {number} length_ms - The length of the song in milliseconds.
 * @property {Function} addToList - A function to add the song to the selected list.
 * @property {SelectedType[]} selectedList - The current list of selected songs.
 * @property {string[]} artistsIds - An array of artist IDs for the song.
 */
interface OneSongProps {
  id: string;
  imagePath: string;
  title: string;
  artists: string[];
  length_ms: number;
  addToList: (selected: SelectedType[]) => void;
  selectedList: SelectedType[];
  artistsIds: string[];
}

/**
 * Helper function to format the song duration from milliseconds to MM:SS format.
 *
 * @param {number} length_ms - The length of the song in milliseconds.
 * @returns {string} The formatted song duration.
 */
const formatTime = (length_ms: number): string => {
  const minute = Math.floor(length_ms / 1000 / 60);
  const seconds = Math.floor((length_ms / 1000) % 60);
  return `${minute}:${seconds < 10 ? "0" : ""}${seconds}`;
};

/**
 * Helper function to check if a song is already in the selected list.
 *
 * @param {string} id - The ID of the song.
 * @param {SelectedType[]} selectedList - The current list of selected songs.
 * @returns {boolean} True if the song is already in the selected list, false otherwise.
 */
const isSongAlreadyAdded = (
  id: string,
  selectedList: SelectedType[]
): boolean => {
  return selectedList.some((element) => element.id === id);
};

/**
 * The `OneSong` component displays a song with its details and allows it to be added to the selection list.
 *
 * @component
 * @param {OneSongProps} props - The properties passed to the component.
 * @returns {JSX.Element} A button element that adds the song to the selection list on click.
 */
export function OneSong({
  id,
  artistsIds,
  imagePath,
  title,
  artists,
  length_ms,
  addToList,
  selectedList,
}: OneSongProps) {
  const time = formatTime(length_ms); // Format the song duration

  // Handler function for adding the song to the selected list
  const handleAddToList = () => {
    if (selectedList.length < 5 && !isSongAlreadyAdded(id, selectedList)) {
      addToList([
        ...selectedList,
        {
          type: "song",
          title,
          artists: artists.join(", "),
          icon: imagePath,
          id,
          artistsIds,
        },
      ]);
    }
  };

  return (
    <button className="onesong_button" onClick={handleAddToList}>
      <div className="one_song">
        <img src={imagePath} alt={title} />
        <div className="title_artist">
          <h3>{title}</h3>
          <h4>{artists.join(", ")}</h4>
        </div>
        <p>{time}</p>
      </div>
    </button>
  );
}
