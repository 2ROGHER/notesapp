import React, { type JSX } from "react";

export type TabComponentProps = {
  id: string;
  label: string;
  changed: boolean;
  hovered: boolean;
  active: boolean;
  state: boolean;
  onTabClick: () => void;
  onCloseTab: () => void;
};
/**
 * This component is used to create o render a [tab]
 *
 * @returns React Component
 */
export const TabComponent: React.FC<TabComponentProps> = ({
  label = "",
  changed = true,
  hovered = false,
  active = false,
  state = true,
  onTabClick = () => {},
  onCloseTab = () => {},
}): JSX.Element => {
  return (
    <section className="tab" onClick={onTabClick}>
      <div className="tab-active"></div>

      <div className="tab-label">{label}</div>

      {hovered ? (
        <div className="tab-closed" onClick={onCloseTab}>
          x
        </div>
      ) : (
        //  If the tab is hovered this is showed, otherwise this is not either changed is not false
        changed && <div className="tab-changed"></div>
      )}
    </section>
  );
};
