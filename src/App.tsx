import reactLogo from './assets/react.svg'
import './App.css'
import { LogoTitle } from './LogoTitle'
import { SearchBar } from './SearchBar'

function App() {

  return (
    <>
      <LogoTitle logoPath={reactLogo} title='Listify'></LogoTitle>
      <SearchBar></SearchBar>
    </>
  )
}

export default App
