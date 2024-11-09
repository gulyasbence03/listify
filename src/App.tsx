import reactLogo from './assets/react.svg'
import './App.less'
import { LogoTitle } from './LogoTitle'
import { SearchBar } from './SearchBar'
import { SearchedArtists } from './SearchedArtists'
import { SearchedSongs } from './SearchedSongs'
import { SelectedFive } from './SelectedFive'

function App() {

  return (
    <>
      <div className='left'>
        <div className='top_bar'>
          <LogoTitle logoPath={reactLogo} title='Listify'></LogoTitle>
          <SearchBar></SearchBar>
        </div>
        <SearchedArtists></SearchedArtists>
        <SearchedSongs></SearchedSongs>
      </div>

      <div className='right'>
        <SelectedFive></SelectedFive>
      </div>
     
    </>
  )
}

export default App
