import { Artist, SelectedType } from "../tools/Types";
import "./OneArtist.less";

/**
 * The properties for the `OneArtist` component.
 *
 * @interface OneArtistProps
 * @property {Artist} artist - The artist to be displayed.
 * @property {SelectedType[]} selectedList - The current list of selected artists.
 * @property {Function} addToList - A function to add the selected artist to the list of selected artists.
 */
interface OneArtistProps {
  artist: Artist;
  addToList: (selected: SelectedType[]) => void;
  selectedList: SelectedType[];
}

/**
 * A helper function that handles the logic for adding an artist to the selected list.
 * It ensures the list does not exceed 5 artists and checks if the artist is already in the list.
 *
 * @param {Artist} artist - The artist to be added to the list.
 * @param {SelectedType[]} selectedList - The current list of selected artists.
 * @param {Function} addToList - A function to update the list of selected artists.
 */
const handleArtistSelection = (
  artist: Artist,
  selectedList: SelectedType[],
  addToList: (list: SelectedType[]) => void
) => {
  // Ensure selectedList is an empty array if undefined
  selectedList = selectedList || [];

  // Check if the artist is already in the selected list
  const idAlreadyAdded = selectedList.some(
    (element) => element.id === artist.id
  );

  // If not already added and the list is not full, add the artist to the list
  if (selectedList.length < 5 && !idAlreadyAdded) {
    addToList([
      ...selectedList,
      {
        type: "artist",
        title: artist.name,
        artists: "",
        icon: artist.images,
        id: artist.id,
      },
    ]);
  }
};

/**
 * The `OneArtist` component renders a button for an artist that, when clicked, adds the artist to the selection list.
 * It displays the artist's image and name.
 *
 * @component
 * @param {OneArtistProps} props - The properties passed to the component.
 * @returns {JSX.Element} A button element containing the artist's image and name.
 */
export function OneArtist({ artist, selectedList, addToList }: OneArtistProps) {
  return (
    <button
      className="artist_button"
      onClick={() => {
        handleArtistSelection(artist, selectedList, addToList);
      }}
    >
      <div className="oneartist">
        <img className="oneartist_img" src={artist.images} alt={artist.name} />
        <h3>{artist.name}</h3>
      </div>
    </button>
  );
}
