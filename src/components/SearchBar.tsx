import { useState } from "react";
import { Artist, Track } from "../tools/Types";
import "./SearchBar.less";
import { searchArtistsHelper, searchTracksHelper } from "../tools/SearchHelper";

/**
 * Props for the `SearchBar` component.
 * This interface defines the functions required for updating the list of artists and tracks
 * based on user search input.
 *
 * @interface SearchBarProps
 * @property {Function} setArtistsSearched - A function that updates the list of searched artists.
 * @property {Function} setTracksSearched - A function that updates the list of searched tracks.
 */
interface SearchBarProps {
  setArtistsSearched: (artists: Artist[]) => void;
  setTracksSearched: (tracks: Track[]) => void;
}

/**
 * `SearchBar` component that allows the user to search for artists or songs.
 * It listens for an "Enter" key press and performs search actions for both artists and tracks.
 *
 * @component
 * @example
 * // Usage example:
 * <SearchBar
 *    setArtistsSearched={updateArtistsList}
 *    setTracksSearched={updateTracksList}
 * />
 *
 * @param {SearchBarProps} props - The props for the `SearchBar` component.
 * @returns {JSX.Element} The JSX to render the search bar.
 */
export function SearchBar({
  setArtistsSearched,
  setTracksSearched,
}: SearchBarProps) {
  const [searched, setSearched] = useState("");

  const handleSearchKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && searched.trim() !== "") {
      await searchArtistsHelper(searched.trim(), setArtistsSearched);
      await searchTracksHelper(searched.trim(), setTracksSearched);
    }
  };

  return (
    <div className="center">
      <input
        className="search_input"
        type="text"
        value={searched}
        placeholder="Search for an Artist or Song..."
        onChange={(e) => setSearched(e.target.value)}
        onKeyDown={handleSearchKeyDown}
      />
    </div>
  );
}
