import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./Auth";
import Application from "./pages/Application";
import Login from "./pages/Login";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/" }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <PrivateRoute
        path="/application"
        exact
        component={() => <Application />}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
