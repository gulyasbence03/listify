
import { useState } from 'react'
import { Generator } from './pages/Generator'
import { PlaylistDisplay } from './pages/PlaylistDisplay'
import { Login } from './pages/Login';

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
  const [isPlaylistReady, setIsPlayListReady] = useState(false);
  const token = localStorage.getItem('access_token');
  console.log(token);
  return (
    token?
    (
      isPlaylistReady?<PlaylistDisplay/>:<Generator onGenerate={() => {
        setIsPlayListReady(true);
      }}/>
    )
    :(
      <Login></Login>
    )
  )
}

export default App
