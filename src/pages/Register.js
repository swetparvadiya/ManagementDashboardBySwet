import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerInitiate } from "../redux/action";

const Register = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const {currentUser} = useSelector(state => state.user);


  const dispatch = useDispatch();

  const { email, password, displayName, passwordConfirm } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== passwordConfirm){
      return;
    }
  dispatch(registerInitiate(email, password, displayName));
    setState({email: "", displayName: "", passwordConfirm: "" })
};


  const handleChange = (e) => {
    let {name, value} = e.target;
    setState({...state,[name]:value});
  };

  return (
    <div id="Reg-form">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        
        <input
          type="email"
          id="useremail"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />

        <input
          type="password"
          id="inputpassword"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />
        <input
          type="password"
          id="inputRePassword"
          placeholder="Confirm password"
          name="passwordConfirm"
          onChange={handleChange}
          value={passwordConfirm}
          required
        />
        <button type="submit">Sign up</button>
        <hr />
        <p>Already have account</p>
        <Link to="/login">
          <button type="button" btn="btn-signup">
           Back
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Register;
