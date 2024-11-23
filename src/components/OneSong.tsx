interface OneSongProps{
    imagePath: string;
    title: string;
    artists: string[]
    length_ms: number;
} 


export function OneSong({imagePath,title,artists,length_ms}: OneSongProps){
    const minute = Math.floor(length_ms/1000/60);
    const seconds = (Math.floor(length_ms/1000%60));
    const time = `${minute}` + ':' + ((seconds<10)?'0':'') + `${seconds}`; 

    return <>
        <button>
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