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
        <div className="add-tab-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#ddd"
            fill="none"
          >
            <path
              d="M12 4V20M20 12H4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </ul>
    </>
  );
};
