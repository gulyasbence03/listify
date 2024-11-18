interface OneSongProps{
    imagePath: string,
    title: string,
    artist: string
    length: string
} 


export function OneSong({imagePath,title,artist,length}: OneSongProps){
    return <>
        <button>
            <div className="one_song">
                <img src={imagePath}/>
                <div className="title_artist">
                    <h3>{title}</h3>
                    <h4>{artist}</h4>
                </div>
                <p>{length}</p>
            </div>
        </button>
    </>
}