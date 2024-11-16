import "./TextButton.less"

interface LogInButtonPorps{
    onClick: ()=>void,
    text: string
}

export function TextButton({onClick, text}:LogInButtonPorps) {


    return <div className="textbutton">
        <button onClick={onClick}>
            <p>{text}</p>
        </button>
    </div>

}
