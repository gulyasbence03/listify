import { SelectedType } from "../tools/Types";
import { SelectedOne } from "./SelectedOne"
import "./SelectedFive.less"

interface SelectedFiveProps{
    selected : SelectedType[];
}

export function SelectedFive({selected}: SelectedFiveProps) {

    return (
        <div className='selected_container' >

            <h2>Selected</h2>
            {selected.map(
                (item) => {
                    return <SelectedOne key={item.id} type={item.type} artist={item.artists} iconPath={item.icon} title={item.title || ""}></SelectedOne>
                }
            )
        }
        </div>
    );
}