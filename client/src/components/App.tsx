import React from "react";
import styled from '@emotion/styled';
import InvoicePage from "./InvoicePage";
import AppHeader from "./AppHeader";
import { Switch, Route } from "react-router";
import AddInvoicePage from "./AddInvoicePage";


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
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <InvoicePage></InvoicePage>
            );
          }}
        />
        <Route
            exact
            path="/addinvoice/"
            render={() => {
              return <AddInvoicePage/>;
            }}
          />
          <Route>
            <div>
              <h2>Oh noes no page T:Toni!</h2>
            </div>
          </Route>
      </Switch>

    </div>
  );
};

export default App;
