import "./SelectedFive.less"
import reactLogo from './assets/react.svg'
import { SelectedOne } from "./SelectedOne"

export function SelectedFive() {

    return (
        <div className='selected_container' >

            <h2>Selected</h2>
            <SelectedOne type="song" artist="Azahriah" iconPath={reactLogo} title="Very long title of the song"></SelectedOne>
            <SelectedOne type="artist" iconPath={reactLogo} title="Artist's Name"></SelectedOne>
            <SelectedOne type="artist" iconPath={reactLogo} title="Artist's Name"></SelectedOne>
            <SelectedOne type="song" artist="Desh" iconPath={reactLogo} title="Very long title of the song"></SelectedOne>
            <SelectedOne type="artist" iconPath={reactLogo} title="Artist's Name"></SelectedOne>
        </div>
    );
}