
import { useState } from 'react'
import { Generator } from './Generator'
import { PlaylistDisplay } from './PlaylistDisplay'



function App() {
  let [isPlaylistReady, setIsPlayListReady] = useState(false);
  return (
    isPlaylistReady?<PlaylistDisplay/>:<Generator onGenerate={() => setIsPlayListReady(true)}/>
  )
}

export default App
