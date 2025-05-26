import React, { type JSX } from "react";
export type FooterBarComponentProps = {};
export const FooterBarComponent: React.FC<
  FooterBarComponentProps
> = (): JSX.Element => {
  return (
    <footer className="footer-bar" aria-label="footer-bar">
      <aside className="footer-bar-left">
        cols 3 | row 34
      </aside>
      <aside className="footer-bar-right">
        <div className="footer-bar-right-zoom">100%</div>
        <div className="footer-bar-right-e2eline">windows (CRLF)</div>        
        <div className="footer-bar-right-encoding">UTF-8</div>
      </aside>
    </footer>
  );
};
