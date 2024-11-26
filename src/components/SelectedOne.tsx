import "./SelectedOne.less"

interface SelectedOneProps {
    type: string
    iconPath: string
    title: string
    artist?: string
}


export function SelectedOne({type, iconPath,title,artist} : SelectedOneProps) {
    return (
        <div className={type + "_type"}>
            <img className="rounded" src={iconPath}/>
            <div>
                <h3>{title}</h3>
                <h4>{artist}</h4>
            </div>
            
        </div>
    );
}