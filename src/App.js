import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ContextProvider } from "./components/Context";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <ContextProvider>
            <Route exact path="/">
              <Home />
            </Route>
          </ContextProvider>
        </Switch>
      </Router>
    </>
  );
}
