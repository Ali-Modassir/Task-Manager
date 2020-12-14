import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import TaskListContextProvider from "./contexts/TaskListContext";
import TaskManager from "./TaskManager/pages/TaskManger";
import Authentication from "./Authentication/pages/auth";
import { useAuth } from "./Authentication/hooks/auth-hook";
import { AuthContext } from "./contexts/auth-context";
import "./App.css";

const App = () => {
  const { token, login, logout, userId } = useAuth();

  let routes;
  console.log(token);
  if (token) {
    routes = (
      <Router>
        <Switch>
          <Route path="/" exact>
            <TaskManager />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  } else {
    routes = (
      <Router>
        <Switch>
          <Route path="/auth" exact>
            <Authentication />
          </Route>
          <Redirect to="/auth" />
        </Switch>
      </Router>
    );
  }

  return (
    <TaskListContextProvider>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          logout: logout,
          login: login,
          userId: userId,
        }}
      >
        <main>{routes}</main>
      </AuthContext.Provider>
    </TaskListContextProvider>
  );
};

export default App;
