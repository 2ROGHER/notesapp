import React, { type JSX } from "react";
import { TabComponent} from '../../../';
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
    <ul className="tab-bar">
      {tabs.length > 0
        ? tabs.map((t: Tab) => (
            <li className="tab-bar-item" key={t.id}>
              <TabComponent
                {...t}
                /* Add any other required props here */
                onTabClick={() => {
                  /* TODO: handle tab click */
                }}
                onCloseTab={() => {
                  /* TODO: handle close tab */
                }}
              />
            </li>
          ))
        : defaultComponentProps}
    </ul>
  );
};
