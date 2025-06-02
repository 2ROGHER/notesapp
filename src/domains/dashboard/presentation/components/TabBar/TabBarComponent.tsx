import React, { type JSX } from "react";
import "./TabBarComponent.scss";

import { TabComponent } from "../../../";
import { Tab } from "../../../domain";

export type TabBarProps = {
  tabs: Tab[];
  defaultComponentProps: JSX.Element;
};

/**
 *
 * @param TabProps
 * @returns JSX.Element
 */
export const TabBarComponent: React.FC<TabBarProps> = ({
  tabs = [],
  defaultComponentProps = <h1>No tabs founded</h1>,
}): JSX.Element => {
  const handleNewTabClick = () => {
    console.log("Creating new tab");
  };

  return (
    <>
      <ul className="tab-bar">
        {tabs.length > 0
          ? tabs.map((t: Tab, i) => (
              <li
                className="tab-bar-item"
                key={t.id}
                style={{ width: "18.75rem" }}
              >
                <TabComponent index={i} tab={t} />
              </li>
            ))
          : defaultComponentProps}

        {/* Add a new tab action button */}
        <div className="add-tab-button" onClick={handleNewTabClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            color="#dfdfdf"
            fill="none"
          >
            <defs />
            <path
              fill="currentColor"
              d="M12.75,4 L12.75,11.25 L20,11.25 C20.414,11.25 20.75,11.586 20.75,12 C20.75,12.414 20.414,12.75 20,12.75 L12.75,12.75 L12.75,20 C12.75,20.414 12.414,20.75 12,20.75 C11.586,20.75 11.25,20.414 11.25,20 L11.25,12.75 L4,12.75 C3.586,12.75 3.25,12.414 3.25,12 C3.25,11.586 3.586,11.25 4,11.25 L11.25,11.25 L11.25,4 C11.25,3.586 11.586,3.25 12,3.25 C12.414,3.25 12.75,3.586 12.75,4 Z"
            />
          </svg>
        </div>
      </ul>
    </>
  );
};
