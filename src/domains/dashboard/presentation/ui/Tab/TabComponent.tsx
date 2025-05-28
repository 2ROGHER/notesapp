import React, { useRef, type JSX } from "react";
import "./TabComponent.scss";

export type TabComponentProps = {
  _id: string;
  _label: string;
  _changed: boolean;
  _hovered: boolean;
  _active: boolean;
  _state: boolean;
  onTabClick: () => void;
  onCloseTab: () => void;
};
/**
 * This component is used to create o render a [tab]
 *
 * @returns React Component
 */
export const TabComponent: React.FC<TabComponentProps> = ({
  _label = "",
  _changed = true,
  _hovered = false,
  _active = false,
  _state = true,
  onTabClick = () => {},
  onCloseTab = () => {},
}): JSX.Element => {
  const [hovered, setHovered] = React.useState((_hovered = false));
  const [changed, setChanged] = React.useState((_changed = true));

  const handleTabOver = () => setHovered(true);
  const handleTabLeave = () => setHovered(false);
  const handleTabClick = () => {
    _active = !_active;
  };

  const classes = [
    "tab",
    hovered ? "tab--hovered" : "",
    _active ? "tab--active" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      onMouseOver={handleTabOver}
      onMouseLeave={handleTabLeave}
      onClick={handleTabClick}
    >
      <div className="tab-active"></div>

      <div className="tab-label">{_label}</div>

      {hovered ? (
        <div className="tab-closed" onClick={onCloseTab}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            color="#ffffff"
            fill="none"
          >
            <path
              d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
              stroke="#ffffff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      ) : (
        //  If the tab is hovered this is showed, otherwise this is not either changed is not false
        changed && <div className="tab-changed"></div>
      )}
    </div>
  );
};
