import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);

  const handleLogin = (e) => {
    e.preventDefault();
    const payload = users.find(
      (user) => user.email === email && user.password === password
    );

    if (payload) {
      dispatch({
        type: "LOGIN",
        payload,
      });
      alert("Succesfully log in...");
      navigate("/");
    } else {
      alert("Wrong Credential !!!");
    }
  };

  return (
    <div className="d-flex justify-content-center py-5">
      <form>
        <div className="form-outline mb-4">
          <p className="h3">Login</p>
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example1">
            Email Address
          </label>
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
              />
              <label className="form-check-label" htmlFor="form2Example31">
                Remember me
              </label>
            </div>
          </div>

          <div className="col">
            <a href="#">Forgot password?</a>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-primary btn-block mb-4"
          onClick={handleLogin}
        >
          LOGIN
        </button>

        <div className="text-center">
          <p>
            Not a member? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
