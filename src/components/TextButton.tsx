import "./TextButton.less";

/**
 * Props for the `TextButton` component.
 * This interface defines the properties passed to the `TextButton` component,
 * which represents a button with text and an optional icon. It supports custom animations,
 * shadow effects, and a click handler.
 *
 * @interface LogInButtonProps
 * @property {Function} onClick - A callback function to be triggered when the button is clicked.
 * @property {string} text - The text to display on the button.
 * @property {string} [icon] - An optional icon URL to be displayed next to the text.
 * @property {boolean} [animate] - An optional boolean that controls whether the button should have an animation.
 * @property {string} [shadowType] - An optional string that specifies the type of shadow effect for the button.
 */
interface LogInButtonPorps {
  onClick: () => void;
  text: string;
  icon?: string;
  animate?: boolean;
  shadowType?: string;
}

/**
 * A button component that displays text and an optional icon.
 * It also supports custom animations, shadow effects, and a click event handler.
 *
 * @component
 * @param {LogInButtonProps} props - The properties passed to the component, which include the text, icon,
 *        animation, shadow type, and the onClick callback.
 * @returns {JSX.Element} The rendered button with its text, optional icon, and applied styles.
 */
export function TextButton({
  shadowType,
  animate,
  onClick,
  text,
  icon,
}: LogInButtonPorps) {
  return (
    <div className="textbutton">
      <button
        onClick={onClick}
        className={"animate_" + animate + " " + "type_" + shadowType}
      >
        <img src={icon} />
        <p>{text}</p>
      </button>
    </div>
  );
}
