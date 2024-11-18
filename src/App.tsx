
import { useState } from 'react'
import { Generator } from './pages/Generator'
import { PlaylistDisplay } from './pages/PlaylistDisplay'



function App() {
  let [isPlaylistReady, setIsPlayListReady] = useState(false);
  return (
    isPlaylistReady?<PlaylistDisplay/>:<Generator onGenerate={() => {
      setIsPlayListReady(true);
    }
  }/>
  )
}

export default App
