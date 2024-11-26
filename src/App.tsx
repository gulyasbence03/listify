
import { useState } from 'react'
import { Generator } from './pages/Generator'
import { PlaylistDisplay } from './pages/PlaylistDisplay'
import { Login } from './pages/Login';
import { handleGenerate } from './api/GeneratPlaylist';
import { SelectedType } from './tools/Types';
import { handleToken } from './api/Authorize';

function App() {
  const [isPlaylistReady, setIsPlayListReady] = useState(false);
  const [selected, setSelected] = useState<SelectedType[]>([]);
  const [generated, setGenerated] = useState<string | null>(null);
  
  handleToken();
  const token = localStorage.getItem('access_token');

  return (
    token?
    (
      isPlaylistReady?<PlaylistDisplay playlistId={generated}/>:<Generator selected={selected} setSelected={setSelected} onGenerate={() => handleGenerate({selected,setIsPlayListReady,setGenerated})}/>
    )
    :(
      <Login></Login>
    )
  )
}

export default App
