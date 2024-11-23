import { useState } from 'react'
import { handleLogin } from '../api/Authorize'
import logo from '../assets/gear.png'
import { LogoTitle } from '../components/LogoTitle'
import { SearchBar } from '../components/SearchBar'
import { SearchedArtists } from '../components/SearchedArtists'
import { SearchedSongs } from '../components/SearchedSongs'
import { SelectedFive } from '../components/SelectedFive'
import { TextButton } from '../components/TextButton'
import './Generator.less'


interface GeneratorProps{
    onGenerate: ()=> void
}

interface Artist {
    id: string;
    name: string;
    images: string; // URL of the first image
}

interface Track{
    id : string;
    name: string;
    duration_ms: number;
    artists: string[];
    image: string
}

export function Generator({onGenerate}: GeneratorProps){
    
    const [artistsSearched, setArtistsSearched] = useState<Artist[]>([]);
    const [tracksSearched, setTracksSearched] = useState<Track[]>([]);

    return <>
        <div className='left'>
            <div className='top_bar'>
                <LogoTitle logoPath={logo} title='Listify'></LogoTitle>
                <SearchBar setArtistsSearched = {setArtistsSearched} setTracksSearched = {setTracksSearched}></SearchBar>
                <div className='login_button'>
                    <TextButton onClick={handleLogin} text="Login"></TextButton>
                </div>
            </div>
            <SearchedArtists artistsSearched = {artistsSearched}></SearchedArtists>
            <SearchedSongs tracksSearched = {tracksSearched}></SearchedSongs>
        </div>
        
        <div className='right'>
            <SelectedFive></SelectedFive>
            <div className='generate_button'>
            <TextButton onClick={onGenerate} text='Generate'></TextButton>
            </div>
        </div>
    </>

}