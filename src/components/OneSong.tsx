import { SelectedType } from "../App";

interface OneSongProps{
    id:string;
    imagePath: string;
    title: string;
    artists: string[]
    length_ms: number;
    addToList: (selected: SelectedType[])=>void;
    selectedList: SelectedType[];
} 

export function OneSong({id,imagePath,title,artists,length_ms,addToList, selectedList}: OneSongProps){
    const minute = Math.floor(length_ms/1000/60);
    const seconds = (Math.floor(length_ms/1000%60));
    const time = `${minute}` + ':' + ((seconds<10)?'0':'') + `${seconds}`; 
    return <>
        <button onClick={ ()=> {
                selectedList = selectedList || [];
                let idAlreadyAdded = false;
                selectedList.forEach(element => {
                    if(element.id == id){
                        idAlreadyAdded = true;
                        return;
                    }
                });
                if (selectedList.length<5 && !idAlreadyAdded){
                    addToList([
                        ...selectedList,
                        {
                            type: "song",
                            title: title,
                            artists: artists.join(", "),
                            icon: imagePath,
                            id: id
                        },
                    ]);
                }

            }
        }>
            <div className="one_song">
                <img src={imagePath}/>
                <div className="title_artist">
                    <h3>{title}</h3>
                    <h4>{artists.map(artist => {return artist}).join(", ")}</h4>
                </div>
                <p>{time}</p>
            </div>
        </button>
    </>
}