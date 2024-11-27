import "./SelectedOne.less";

/**
 * Props for the `SelectedOne` component.
 * This interface defines the properties passed to the `SelectedOne` component,
 * which represents an individual item in the selected list with a title, artist (optional), and icon.
 *
 * @interface SelectedOneProps
 * @property {string} type - The type of the item (e.g., 'artist', 'song').
 * @property {string} iconPath - The path to the icon image associated with the item.
 * @property {string} title - The title of the item, such as the name of the artist or song.
 * @property {string} [artist] - The artist's name associated with the item, optional.
 */
interface SelectedOneProps {
  type: string;
  iconPath: string;
  title: string;
  artist?: string;
}

/**
 * A component that displays an individual selected item with its type, title, artist (if available),
 * and an icon. It renders a div containing the icon and the title, along with the artist's name if provided.
 *
 * @component
 * @param {SelectedOneProps} props - The properties passed to the component, which include the item's type, icon, title, and artist.
 * @returns {JSX.Element} The rendered selected item with its icon, title, and optional artist.
 */
export function SelectedOne({
  type,
  iconPath,
  title,
  artist,
}: SelectedOneProps) {
  return (
    <div className={type + "_type"}>
      <img className="rounded" src={iconPath} />
      <div>
        <h3>{title}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
}
