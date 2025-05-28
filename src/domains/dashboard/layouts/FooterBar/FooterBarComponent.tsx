import "./FooterBarComponent.scss";

import React, { type JSX } from "react";
export type FooterBarComponentProps = {};
export const FooterBarComponent: React.FC<
  FooterBarComponentProps
> = (): JSX.Element => {
  const [cols, setCols] = React.useState(3);
  const [row, setRow] = React.useState(34);
  return (
    <footer className="footer-bar" aria-label="footer-bar">
      <aside className="footer-bar-left">
        <div className="footer-bar-left-rows">rows {row}</div>
        <span className="separator"></span>
        <div className="footer-bar-left-cols">cols {cols}</div>
      </aside>
      <aside className="footer-bar-right">
        <div className="footer-bar-right-zoom">100%</div>
        <span className="separator"></span>
        <div className="footer-bar-right-e2eline">windows (CRLF)</div>
        <span className="separator"></span>

        <div className="footer-bar-right-encoding">UTF-8</div>
      </aside>
    </footer>
  );
};
