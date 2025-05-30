import React, { type JSX } from "react";
export type LogoComponentProps = {
  w: string;
  h: string;
  bgColor: string;
};

/**
 *
 * @returns JSX.Element
 */
export const LogoComponent: React.FC<LogoComponentProps> = ({
  w = "32",
  h = "32",
  bgColor = "#2F88FF",
}): JSX.Element => {
  return (
    <div className="logo" style={{ width: w, height: h }}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M28 0H0V28H28V0Z" fill="white" fill-opacity="0.01" />
        <path
          d="M4.66667 3.5C4.66667 2.85567 5.189 2.33333 5.83333 2.33333H17.5L23.3333 8.16666V24.5C23.3333 25.1443 22.811 25.6667 22.1667 25.6667H5.83333C5.189 25.6667 4.66667 25.1443 4.66667 24.5V3.5Z"
          fill="#2F88FF"
          stroke="#2F88FF"
          stroke-width="2.91667"
          stroke-linejoin="round"
        />
        <path
          d="M9.33334 11.6667H18.6667"
          stroke="white"
          stroke-width="2.91667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.33334 16.3333H18.6667"
          stroke="white"
          stroke-width="2.91667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};
