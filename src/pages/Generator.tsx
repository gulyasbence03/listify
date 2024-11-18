import { useState } from 'react'
import { handleLogin } from '../api/Authorize'
import reactLogo from '../assets/react.svg'
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

export function Generator({onGenerate}: GeneratorProps){
    
    const [artistsSearched, setArtistsSearched] = useState<Artist[]>([]);

    return <>
        <div className='left'>
            <div className='top_bar'>
                <LogoTitle logoPath={reactLogo} title='Listify'></LogoTitle>
                <SearchBar setArtistsSearched = {setArtistsSearched}></SearchBar>
                <div className='login_button'>
                    <TextButton onClick={handleLogin} text="Login"></TextButton>
                </div>
            </div>
            <SearchedArtists artistsSearched = {artistsSearched}></SearchedArtists>
            <SearchedSongs></SearchedSongs>
        </div>
        
        <div className='right'>
            <SelectedFive></SelectedFive>
            <div className='generate_button'>
            <TextButton onClick={onGenerate} text='Generate'></TextButton>
            </div>
        </div>
    </>

}