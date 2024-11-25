import "./TextButton.less"
interface LogInButtonPorps{
    onClick: ()=>void;
    text: string;
    icon?: string;
    animate?: boolean;
    shadowType?: string;
}

export function TextButton({shadowType, animate, onClick, text, icon}:LogInButtonPorps) {


    return <div className="textbutton">
        <button onClick={onClick} className={'animate_'+animate+' '+'type_'+shadowType}>
            <img src={icon}/>
            <p>{text}</p>
        </button>
    </div>

}
