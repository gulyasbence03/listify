
import { useEffect, useState } from 'react'
import { Generator } from './pages/Generator'
import { PlaylistDisplay } from './pages/PlaylistDisplay'
import { Login } from './pages/Login';
import { createPlaylist, getArtists, getRecommendation, getTopFive } from './api/API';

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
  image: string;
  artistIds: string[];
}

export interface SelectedType{
  id: string;
  type: string;
  artists?: string;
  title: string;
  icon:string;
  artistsIds: string[];
}

function shuffleArray(array: string[]) { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
} 

const removeDuplicates = (arr: string[]) : string[] => {
  const unique: string[] = [];
  arr.forEach(element => {
      if (!unique.includes(element)) {
          unique.push(element);
      }
  });
  return unique;
}

function App() {
  const [isPlaylistReady, setIsPlayListReady] = useState(false);
  const token = localStorage.getItem('access_token');
  //console.log(token);

  const [selected, setSelected] = useState<SelectedType[]>([]);
  const [generated, setGenerated] = useState<string | null>(null);

  const handleGenerate = async () => {
    setIsPlayListReady(true);
    const songIds: string[] = [];
    let genArtistIds: string[] = [];
    const topArtistIds: string[] = [];

    if (selected?.length > 0) {
      selected.forEach((item) => {
        if (item.type === 'song') {
          songIds.push(item.id);
          item.artistsIds?.map((artId)=>{topArtistIds.push(artId)});
          
        } else {
          genArtistIds.push(item.id);
        }
      });

      try {
        console.log(genArtistIds);
        genArtistIds =  removeDuplicates(genArtistIds);

        const response = await getRecommendation(15, genArtistIds, songIds);
        let generatedUris : string[] = response?.tracks.map(
          (track : Track) => `spotify:track:${track.id}`
        )
        genArtistIds = genArtistIds.concat(topArtistIds);
        await Promise.all(
          genArtistIds.map(async artistId => {
            const topFives = await getTopFive(artistId);
            topFives?.tracks.forEach((track: Track) => {
              generatedUris.push(`spotify:track:${track.id}`);
            });
          })
        );

        generatedUris =  removeDuplicates(generatedUris);
        generatedUris = shuffleArray(generatedUris);

        const resp = await createPlaylist(generatedUris, "Listify Playlist", false);
        setGenerated(resp?resp:null);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    }
  };

  return (
    token?
    (
      isPlaylistReady?<PlaylistDisplay playlistId={generated}/>:<Generator selected={selected} setSelected={setSelected} onGenerate={handleGenerate}/>
    )
    :(
      <Login></Login>
    )
  )
}

export default App
