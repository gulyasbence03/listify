
import { Artist, SelectedType } from "../tools/Types";
import "./OneArtist.less"

interface OneArtistProps{
    artist: Artist;
    addToList: (selected: SelectedType[])=>void;
    selectedList: SelectedType[];
}

export function OneArtist({artist,selectedList, addToList}:OneArtistProps){
    return <button className="artist_button" onClick={ ()=> {
        selectedList = selectedList || [];
        let idAlreadyAdded = false;
        selectedList.forEach(element => {
            if(element.id == artist.id){
                idAlreadyAdded = true;
                return;
            }
        });
        if (selectedList.length<5 && !idAlreadyAdded){
            addToList([
                ...selectedList,
                {
                    type: "artist",
                    title: artist.name,
                    artists: "",
                    icon: artist.images,
                    id: artist.id,
                },
            ]);
        }
    }}>
            <div className="oneartist">
                <img className="oneartist_img" src={artist.images} alt={artist.name} />
                <h3>{artist.name}</h3>
            </div>
        </button>
    }

