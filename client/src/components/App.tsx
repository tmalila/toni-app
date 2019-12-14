import React from "react";
import styled from '@emotion/styled';
import InvoicePage from "./InvoicePage";
import AppHeader from "./AppHeader";

const Button = styled.button`
  background-color: ${(props: any) => props.theme.colors.primary};
`;

type Props = {
  toggleDarkMode: () => void;
  darkMode: boolean;
};

const App: React.FC<Props> = props => {
  const { toggleDarkMode, darkMode } = props;

  return (
    <div>
      <AppHeader toggleDarkMode={toggleDarkMode} darkMode={darkMode}></AppHeader>
      <InvoicePage></InvoicePage>
    </div>
  );
};

export default App;
