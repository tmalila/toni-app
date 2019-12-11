import React, { FunctionComponent } from "react";
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import DarkModeButton from "./DarkModeButton";

interface Props {
  toggleDarkMode: () => void;
  darkMode: boolean;
};

const AppHeader: React.FunctionComponent<Props> = props => {
  const { toggleDarkMode, darkMode } = props;

  return(
    <div
      css={theme => ({
        background: theme.colors.primary,
        width: "100%",
        padding: "1rem",
        color: theme.colors.text,
        boxShadow: theme.shadows.depth1,
        display: "flex"
      })}
    >
      <span
        css={theme => ({
          fontSize: "1.5em",
          width: "100%"
        })}
      >
        Toni App
      </span>
      <DarkModeButton toggleDarkMode={toggleDarkMode} darkMode={darkMode}></DarkModeButton>
    </div>
  );
}

export default AppHeader;