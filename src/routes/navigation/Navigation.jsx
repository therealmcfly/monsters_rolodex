import { useContext } from "react";
import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { signOutUser } from "../../utils/firebase/firebase";

import "./Navigation.scss";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleSignOut = async () => {
    setCurrentUser(null);
    await signOutUser();
  };

  return (
    <Fragment>
      <div className="nav-bar">
        <Link className="logo-container" to="/">
          <h1>SURF ANGEL</h1>
        </Link>
        <div className="nav-links-container">
          {currentUser && <span>Hello {currentUser.email}</span>}
          {currentUser ? (
            <Link className="nav-link" to="/auth" onClick={handleSignOut}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
