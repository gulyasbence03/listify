import "./TimeoutAlert.less"

export function TimeoutAlert(){
    return <label onAnimationEnd={() => {
            localStorage.removeItem("isTimeout");
            location.href = "http://localhost:5173/";
        }}>
        <input type="checkbox" className="alertCheckbox"/>
        <div className="alert error">
        <span className="alertClose">x</span>
        <span className="alertText">Session expired. Log in to continue...
        <div className="line"></div>
        <br className="clear"/></span>
        </div>
  </label>
}
