import { useState } from "react";
import logo from "../assets/gear.png";
import logout from "../assets/logout.png";
import { LogoTitle } from "../components/LogoTitle";
import { SearchBar } from "../components/SearchBar";
import { SearchedArtists } from "../components/SearchedArtists";
import { SearchedSongs } from "../components/SearchedSongs";
import { SelectedFive } from "../components/SelectedFive";
import { TextButton } from "../components/TextButton";
import { Artist, SelectedType, Track } from "../tools/Types";
import "./Generator.less";

/**
 * Props for the Generator component.
 *
 * This interface defines the props required by the Generator component, including:
 * - A function `onGenerate` that triggers the generation process based on selected items.
 * - A function `setSelected` that updates the list of selected items.
 * - An array `selected` containing the currently selected items.
 *
 * @interface GeneratorProps
 * @property {Function} onGenerate - Function to trigger the generation process.
 * @property {Function} setSelected - Function to update the selected items list.
 * @property {SelectedType[]} selected - List of currently selected items.
 */
interface GeneratorProps {
  onGenerate: () => void;
  setSelected: (selected: SelectedType[]) => void;
  selected: SelectedType[];
}

/**
 * The Generator component provides a user interface for searching, selecting, and generating items.
 * It allows users to search for artists and tracks, view and manage selected items, and trigger a
 * generation process based on those selections. The component also includes a logout functionality.
 *
 * - The component features a search bar to find artists and tracks.
 * - Searched artists and tracks are displayed and can be added to the selected list.
 * - The "Generate" button is enabled when there are selected items, allowing the user to trigger a generation action.
 * - The user can log out, which removes the access token and redirects to the login page.
 *
 * @param {Object} props - The props for the Generator component.
 * @param {Function} props.setSelected - A function that sets the selected items. Takes an array of `SelectedType[]`.
 * @param {SelectedType[]} props.selected - An array of selected items that will be displayed in the `SelectedFive` component.
 * @param {Function} props.onGenerate - A function to be triggered when the "Generate" button is clicked.
 *
 * @example
 * <Generator onGenerate={handleGenerate} setSelected={handleSetSelected} selected={selectedItems} />
 */
export function Generator({
  setSelected,
  selected,
  onGenerate,
}: GeneratorProps) {
  const [artistsSearched, setArtistsSearched] = useState<Artist[]>([]);
  const [tracksSearched, setTracksSearched] = useState<Track[]>([]);

  const logOut = () => {
    localStorage.removeItem("access_token");
    location.href = "http://localhost:5173/";
  };

  return (
    <>
      <div className="left">
        <div className="top_bar">
          <LogoTitle logoPath={logo} title="Listify"></LogoTitle>
          <SearchBar
            setArtistsSearched={setArtistsSearched}
            setTracksSearched={setTracksSearched}
          ></SearchBar>
          <div className="logout_container">
            <TextButton
              shadowType="exit"
              icon={logout}
              text="Log Out"
              onClick={logOut}
            ></TextButton>
          </div>
        </div>
        <SearchedArtists
          artistsSearched={artistsSearched}
          addToList={setSelected}
          selectedList={selected}
        ></SearchedArtists>
        <SearchedSongs
          tracksSearched={tracksSearched}
          addToList={setSelected}
          selectedList={selected}
        ></SearchedSongs>
      </div>

      <div className="right">
        <SelectedFive selected={selected}></SelectedFive>
        <div className="generate_button">
          {selected?.length > 0 ? (
            <TextButton
              shadowType="do"
              animate={true}
              icon={logo}
              onClick={onGenerate}
              text="Generate"
            ></TextButton>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
