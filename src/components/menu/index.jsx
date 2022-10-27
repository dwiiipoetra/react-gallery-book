import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Menu = () => {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // console.log("all users: ", users);
  // console.log("logged in user: ", user);

  return (
    <div className="col-12">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link
            className="nav-link active"
            aria-current="page"
            to="/"
            style={{ fontSize: "18px", marginRight: "20px" }}
          >
            Gallery Book
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                {user ? (
                  <Link
                    className="nav-link"
                    to="#"
                    onClick={() => {
                      dispatch({
                        type: "LOGOUT",
                      });
                    }}
                  >
                    {user.email} (Logout)
                  </Link>
                ) : (
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
