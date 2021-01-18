import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ContextProvider } from "./components/Context";
import Register from "./pages/Register";
import { AuthProvider } from "./components/Context/AuthContext";
import Login from "./pages/Login";
import ForgetPass from "./pages/ForgetPass";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <ContextProvider>
            <AuthProvider>
              <Route path="/forgetPass">
                <ForgetPass />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>

              <Route exact path="/">
                <Home />
              </Route>
            </AuthProvider>
          </ContextProvider>
        </Switch>
      </Router>
    </>
  );
}
