import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import "./Navigation.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="nav-bar">
        <Link className="logo-container" to="/">
          <h1>SURF ANGEL</h1>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
