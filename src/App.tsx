
import { useState } from 'react'
import { Generator } from './pages/Generator'
import { PlaylistDisplay } from './pages/PlaylistDisplay'

export interface Artist {
  id: string;
  name: string;
  images: string; // URL of the first image
}

export interface Track{
  id : string;
  name: string;
  duration_ms: number;
  artists: string[];
  image: string
}

export interface SelectedType{
  id: string;
  type: string;
  artists?: string;
  title: string;
  icon:string;
}

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
