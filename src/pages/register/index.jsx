import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    dispatch({
      type: "REGISTER",
      payload: {
        id: Math.floor(Math.random() * 100),
        username,
        email,
        password,
      },
    });
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center py-5">
      <form>
        <div className="form-outline mb-4">
          <p className="h3">Register</p>
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example1">
            Username
          </label>
          <input
            type="text"
            id="form2Example1"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">
            Email address
          </label>
          <input
            type="email"
            id="form2Example2"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example3">
            Password
          </label>
          <input
            type="password"
            id="form2Example3"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example4">
            Confirm Password
          </label>
          <input
            type="password"
            id="form2Example4"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          onClick={handleRegister}
        >
          REGISTER
        </button>

        <div className="text-center">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
