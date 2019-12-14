import React, { FunctionComponent } from "react";
import Icon from '@mdi/react'
import { mdiLightbulbOnOutline, mdiLightbulbOffOutline } from '@mdi/js'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ThemeProvider, useTheme } from 'emotion-theming'

interface Props {
  toggleDarkMode: () => void;
  darkMode: boolean;
};

const DarkModeButton: FunctionComponent<Props> = props => {
  const { toggleDarkMode, darkMode } = props;
  const theme: any = useTheme();
  return(
    <div onClick={() => toggleDarkMode()}>
      <Icon path={darkMode ? mdiLightbulbOnOutline : mdiLightbulbOffOutline}
        title="Dark mode on"
        size={1}
        color={theme.colors.pink}
        />
    </div>
    
  );
}

export default DarkModeButton;