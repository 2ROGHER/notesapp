import "./EditionToolsWidget.scss";
import React, { type JSX } from "react";

export const EditionToolsWidget: React.FC = (): JSX.Element => {
  return (
    <div className="edition-tools">
      <section className="edition-tools-color">
        <input
          title="color picker"
          aria-label="color-picker"
          type="color"
          name="color"
          id="color"
          value="red"
        ></input>
      </section>
      <section className="edition-tools-edit">
        <div>font</div>
        <div>text-size</div>
        <div>img</div>
        <div>background-image</div>
      </section>
      <section className="edition-tools-text">
        <div>bold</div>
        <div>italic</div>
        <div>underline</div>
        <div>strikethrough</div>
        <div>superscript</div>
        <div>subscript</div>
      </section>

      <section className="edition-tools-aligment">
        <div>left</div>
        <div>center</div>
        <div>right</div>
      </section>
      <section className="edition-tools-esentials">
        <div>voice</div>
        <div>update file to drive</div>
        <div>clock|reminder</div>
      </section>
    </div>
  );
};
