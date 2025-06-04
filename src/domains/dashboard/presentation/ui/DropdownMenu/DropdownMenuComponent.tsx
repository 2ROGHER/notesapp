import "./DropdownMenuComponent.scss";

import React, { useState, type JSX } from "react";

export type DropDownMenuComponentProps = {
  defaultComponentProps: JSX.Element;
  props: any;
  label: string;
  items: string[];
};
export const DropDownMenuComponent: React.FC<DropDownMenuComponentProps> = ({
  items = [],
  label = "fonts",
  props,
  defaultComponentProps = <span>items not found</span>,
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () =>  setIsOpen((prv) => !prv);
  
  return (
    <menu
      className="dropdown-menu"
      role="menu"
      aria-label="Dropdown Menu"
      style={{ width: props.width, height: props.height }}
    >
      <div
        className="dropdown-menu-header"
        style={{ background: props.background }}
      >
        <span className="dropdown-menu-header-label">{label}</span>
        <span className="separator"></span>
        <button
          className="dropdown-menu-content-btn"
          aria-label="Button"
          onClick={toggleMenu}
        >
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#dfdfdf"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                fill="#dfdfdf"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="dropdown-menu-body">
          <ul className="dropdown-menu-body-items" role="menu">
            {items.length > 0 ? (
              items.map((item, i) => (
                <li key={i} role="menuitem" tabIndex={0}>
                  {item}
                </li>
              ))
            ) : (
              <li role="menuitem">{defaultComponentProps}</li>
            )}
          </ul>
        </div>
      )}
    </menu>
  );
};
