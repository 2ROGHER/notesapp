import React, { useRef, type JSX } from "react";
import "./TabComponent.scss";
import { useDispatch } from "react-redux";
import {
  closeTab,
  toggleTabActive,
  toggleTabHover,
} from "../../../../../core/state/actions";
import type { Dispatch } from "redux";
import type { Tab } from "../../../domain";

export type TabComponentProps = {
  tab: Tab;
  index: number;
};
/**
 * This component is used to create o render a [tab]
 *
 * @returns React Component
 */
export const TabComponent: React.FC<TabComponentProps> = ({
  tab,
  index,
}): JSX.Element => {
  const dispatch = useDispatch<Dispatch<any>>();
  const tabRef = useRef<HTMLDivElement>(null);

  const handleTabOver = (id: string) => dispatch(toggleTabHover(id, true));

  const handleTabLeave = (id: string) => dispatch(toggleTabHover(id, false));

  const handleTabClick = (id: string) => {
    dispatch(toggleTabActive(id));
  };

  const handleCloseTab = (e: React.MouseEvent, id: string) => {
    e.stopPropagation(); // stop event propagation
    dispatch(closeTab(id));
  };

  const classes = [
    "tab",
    tab.hovered ? "tab--hovered-on" : "tab--hovered-off",
    tab.active ? "tab--selected" : "tab--unselected",
  ].join(" ");

  return (
    <div
      className={classes}
      onMouseOver={() => handleTabOver(tab.id)}
      onMouseLeave={() => handleTabLeave(tab.id)}
      onClick={() => handleTabClick(tab.id)}
      ref={tabRef}
    >
      {index == 0 && <div className="tab-active"></div>}

      <div className="tab-label">{tab.label}</div>

      {tab.hovered ? (
        <div className="tab-closed" onClick={(e) => handleCloseTab(e, tab.id)}>
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
        tab.changed && <div className="tab-changed"></div>
      )}
    </div>
  );
};
