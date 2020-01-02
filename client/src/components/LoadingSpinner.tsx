import React, { FunctionComponent } from "react";
import { mdiLoading, mdiProgressClock } from '@mdi/js';
import Icon from '@mdi/react'
import { useTheme } from "emotion-theming";

type Props = {};

const LoadingSpinner: FunctionComponent<Props> = () => {
  const theme: any = useTheme();

  return (
    <div style={{textAlign: "center"}}>
      <Icon path={mdiLoading}
        title="Loading"
        size={3}
        color={theme.colors.pink}
        spin={1}
        />
    </div>
  );
};

export default LoadingSpinner;
