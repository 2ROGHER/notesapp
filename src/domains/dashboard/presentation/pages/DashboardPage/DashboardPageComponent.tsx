import "./DashboardPageComponent.scss";
import { EditionToolsWidget } from "../../widgets/EditionToolsWidget/EditionToolsWidget";

import React, { type JSX } from "react";

import {
  LogoComponent,
  ToolsBarComponent,
  TabBarComponent,
  FooterBarComponent,
  TextInputFieldComponent,
} from "../../../";

import { useSelector } from "react-redux";
import { DropDownMenuComponent } from "../../ui/DropdownMenu/DropdownMenuComponent";

// TODO("implement here contexts to works freely")

export type DashboardPageComponentProps = {};

/**
 * This components is used to render a [DashboardPage] component to render a completly [DashboardPage]
 * This component is used to handle the state of the [DashboardPage]
 * @returns  JSX.Element
 * @author [Roger Mestanza](https://github.com/2ROGHER)
 */
export const DashboardPageComponent: React.FC<
  DashboardPageComponentProps
> = (): JSX.Element => {
  // TODO("Here we need to use the store [tab] state and render the tabs")
  const tabs = useSelector((state: any) => state.dashboard.header.tabs);
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="logo-box">
          <LogoComponent w="32" h="32" bgColor="#2F88FF" />
        </div>

        {
          // All [TabComponents] render here
          <TabBarComponent
            tabs={tabs}
            defaultComponentProps={<h1>No tabs founded</h1>}
          />
        }
      </header>
      <section className="dashboard-tools">
        <ToolsBarComponent options={["File", "View", "Edit"]} />
      </section>
      <main className="dashboard-main">
        {/* Here goes the EditorTools widget to edit your notes as you want */}
        {/* <EditionToolsWidget /> */}

        <DropDownMenuComponent
          label="fonts"
          items={["font1", "font2", "font3", "font4", "font5"]}
          props={{ width: "100px", height: "100px", background: "#2c2c2c" }}
          defaultComponentProps={<span>items not found</span>}
        />
        <TextInputFieldComponent />
      </main>

      <footer className="dashboard-footer">
        <FooterBarComponent />
      </footer>
    </div>
  );
};
