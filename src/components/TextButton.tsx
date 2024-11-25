import "./TextButton.less"
interface LogInButtonPorps{
    onClick: ()=>void;
    text: string;
    icon?: string;
}

export function TextButton({onClick, text, icon}:LogInButtonPorps) {


    return <div className="textbutton">
        <button onClick={onClick}>
            <img src={icon}/>
            <p>{text}</p>
        </button>
    </div>

}
