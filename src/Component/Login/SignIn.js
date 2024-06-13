// src/Component/Login/SignIn.js
import React, { useState } from "react";
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const navigate = useNavigate();

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();
    const { email, password } = state;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate("/Home");
    } catch (error) {
      console.error(error);
      if (error.code === "auth/user-not-found") {
        // Display alert message
        window.alert("No user found");
      } else {
        // Display other error messages
        window.alert("No User found please enter the correct details or signup .");
      }
    }

    setState({
      email: "",
      password: ""
    });
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign In</h1>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
