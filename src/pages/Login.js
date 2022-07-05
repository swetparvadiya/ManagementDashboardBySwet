import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

  const [state, setState] = useState({
    email: "",
    password: "",
  })
  const {email, password} = state;

  const handleSubmit = () => {};
  const handleGoogleSignIn = () => {};
  const handleChange = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <div>
          <button type="button" onClick={handleGoogleSignIn}>
            <span>Google</span>
          </button>
        </div>
        <p>OR</p>

        <input
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />

<input
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />
        <button type="submit">Sign In</button>
        <hr/>
        <p>Don't have account</p>
        <Link to="/register">
        <button type="button" btn="btn-signup">Sign Up new user</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
