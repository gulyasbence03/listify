import { useState } from "react";
import { Generator } from "./pages/Generator";
import { PlaylistDisplay } from "./pages/PlaylistDisplay";
import { Login } from "./pages/Login";
import { handleGenerate } from "./api/GeneratePlaylistLogic";
import { SelectedType } from "./tools/Types";
import { handleToken } from "./api/Authorize";

/**
 * Main application component that conditionally renders either the login page,
 * the playlist generator, or the playlist display based on the authentication
 * state and playlist readiness.
 *
 * @function App
 * @returns {JSX.Element} - The rendered component.
 *
 * @state {boolean} isPlaylistReady - Determines if the playlist is ready to be displayed.
 * @state {SelectedType[]} selected - The list of selected items (artists or tracks).
 * @state {string | null} generated - The ID of the generated playlist or null if not generated.
 *
 * @effects -
 * - Handles the access token check and triggers necessary actions based on the authentication state.
 * - Displays either the `Generator` component (to generate a playlist) or the `PlaylistDisplay` component
 *   (if the playlist has been generated).
 */

function App() {
  const [isPlaylistReady, setIsPlayListReady] = useState(false);
  const [selected, setSelected] = useState<SelectedType[]>([]);
  const [generated, setGenerated] = useState<string | null>(null);

  handleToken();
  const token = localStorage.getItem("access_token");

  return token ? (
    isPlaylistReady ? (
      <PlaylistDisplay playlistId={generated} />
    ) : (
      <Generator
        selected={selected}
        setSelected={setSelected}
        onGenerate={() =>
          handleGenerate({ selected, setIsPlayListReady, setGenerated })
        }
      />
    )
  ) : (
    <Login></Login>
  );
}

export default App;
