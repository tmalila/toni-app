import React, { useState } from "react";
import App from "./components/App";
import { Global, css } from "@emotion/core";
import emotionNormalize from 'emotion-normalize';
import { ThemeProvider } from 'emotion-theming'

const Root: React.FunctionComponent = () => {
  const [darkMode, setdarkMode] = useState(false);

  const lightTheme = {
    colors: {
      bg: '#FFFFFF',
      text: 'rgba(0, 0, 0, 0.87)',
      textdimmer: 'rgba(0, 0, 0, 0.6)',
      textdisabled: 'rgba(0, 0, 0, 0.38)',
      black: '#000000',
      primary: "#00E9FF",
      secondary: "#FF38E4",
      cyan: "#00E9FF",
      cyanlight: "#6fffff",
      cyandark: "#00b6cc",
      pink: "#FF38E4",
      pinklight: "#ff76ff",
      pinkdark: "#c800b1"
    },
    shadows: {
      depth1: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)",
      depth2: "0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3)",
      depth3: "0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3)",
    },
  }
  
  const darkTheme = {
    colors: {
      bg: '#121212',
      text: 'rgba(255, 255, 255, 0.87)',
      textdimmer: 'rgba(255, 255, 255, 0.6)',
      textdisabled: 'rgba(255, 255, 255, 0.38)',
      black: '#000000',
      primary: "#1F1F1F",
      secondary: "#2C2C2C",
      cyan: "#00E9FF",
      cyanlight: "#6fffff",
      cyandark: "#00b6cc",
      pink: "#FF38E4",
      pinklight: "#ff76ff",
      pinkdark: "#c800b1"
    },
    shadows: {
      depth1: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)",
      depth2: "0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3)",
      depth3: "0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3)",
    },
  }

  const toggleDarkMode = () => {
    console.log("se toggling dark mode:", darkMode);
    setdarkMode(!darkMode);
  };

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Global
            styles={theme => [
              emotionNormalize,
              css({
                html: {
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontWeight: 500
                },
                body: {
                  background: `${theme.colors.bg}`,
                  color: `${theme.colors.text}`,
                  width: "100%",
                },
                "*": {
                  boxSizing: "border-box",
                }
              })
            ]}
          />
          <App toggleDarkMode={toggleDarkMode} darkMode={darkMode}></App>
        </ThemeProvider>
    </>
  );
};

export default Root;
