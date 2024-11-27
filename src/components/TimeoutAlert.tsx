import "./TimeoutAlert.less";

/**
 * A component that displays an alert when the session has expired.
 * The alert informs the user that their session has expired and provides a way to log in again.
 * The alert automatically redirects the user to the home page after the animation ends.
 *
 * @component
 * @returns {JSX.Element} The rendered alert component with a checkbox and message about the expired session.
 *
 * @example
 * <TimeoutAlert />
 */
export function TimeoutAlert() {
  return (
    <label
      onAnimationEnd={() => {
        localStorage.removeItem("isTimeout");
        location.href = "http://localhost:5173/";
      }}
    >
      <input type="checkbox" className="alertCheckbox" />
      <div className="alert error">
        <span className="alertClose">x</span>
        <span className="alertText">
          Session expired. Log in to continue...
          <div className="line"></div>
          <br className="clear" />
        </span>
      </div>
    </label>
  );
}
