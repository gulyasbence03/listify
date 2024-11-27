import { SelectedType } from "../tools/Types";
import { SelectedOne } from "./SelectedOne";
import "./SelectedFive.less";

/**
 * Props for the `SelectedFive` component.
 * This interface defines the properties passed to the `SelectedFive` component, specifically the
 * list of selected items that should be displayed within the component.
 *
 * @interface SelectedFiveProps
 * @property {SelectedType[]} selected - Array of selected items to display.
 */
interface SelectedFiveProps {
  selected: SelectedType[];
}

/**
 * A component that displays a list of selected items. It maps over the `selected` array
 * and renders a `SelectedOne` component for each item, passing relevant details like type, artist, icon, and title.
 *
 * @component
 * @param {SelectedFiveProps} props - The properties passed to the component, which include the selected items.
 * @returns {JSX.Element} The rendered list of selected items.
 */
export function SelectedFive({ selected }: SelectedFiveProps) {
  return (
    <div className="selected_container">
      <h2>Selected</h2>
      {selected.map((item) => {
        return (
          <SelectedOne
            key={item.id}
            type={item.type}
            artist={item.artists}
            iconPath={item.icon}
            title={item.title || ""}
          ></SelectedOne>
        );
      })}
    </div>
  );
}
