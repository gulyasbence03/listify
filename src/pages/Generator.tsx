import { useState } from 'react'
import logo from '../assets/gear.png'
import logout from "../assets/logout.png"
import { LogoTitle } from '../components/LogoTitle'
import { SearchBar } from '../components/SearchBar'
import { SearchedArtists } from '../components/SearchedArtists'
import { SearchedSongs } from '../components/SearchedSongs'
import { SelectedFive } from '../components/SelectedFive'
import { TextButton } from '../components/TextButton'
import './Generator.less'
import { Artist, SelectedType, Track } from '../App'


interface GeneratorProps{
    onGenerate: ()=> void;
    setSelected: (selected: SelectedType[]) => void;
    selected: SelectedType[];
}

export function Generator({setSelected, selected, onGenerate}: GeneratorProps){
    
    const [artistsSearched, setArtistsSearched] = useState<Artist[]>([]);
    const [tracksSearched, setTracksSearched] = useState<Track[]>([]);
    

    return <>
        <div className='left'>
            <div className='top_bar'>
                <LogoTitle logoPath={logo} title='Listify'></LogoTitle>
                <SearchBar setArtistsSearched = {setArtistsSearched} setTracksSearched = {setTracksSearched}></SearchBar>
                <div className='logout_container'>
                    <TextButton shadowType='exit' icon={logout} text='Log Out' onClick={() => {
                        localStorage.removeItem("access_token");
                        location.href = "http://localhost:5173/"
                    }}></TextButton>
                </div>
            </div>
            <SearchedArtists artistsSearched = {artistsSearched} addToList={setSelected} selectedList={selected}></SearchedArtists>
            <SearchedSongs tracksSearched = {tracksSearched} addToList={setSelected} selectedList={selected}></SearchedSongs>
        </div>
        
        <div className='right'>
            <SelectedFive selected={selected}></SelectedFive>
            <div className='generate_button'>
            {(selected?.length>0)?<TextButton shadowType='do' animate={true} icon={logo} onClick={onGenerate} text='Generate'></TextButton>:""}
            </div>
        </div>
    </>

}