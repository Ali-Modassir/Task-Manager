import React from "react";

import Header from "../../TaskManager/components/Header";
import AuthForm from "../components/AuthForm";

const Auth = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="app-wrapper">
          <Header name="Login" />
          <div>
            <AuthForm />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Auth;
