import React, { useState } from "react";
import PT from "prop-types";
//import axios from "axios";
//import { useNavigate } from "react-router-dom";
const initialFormValues = {
  username: "",
  password: "",
};
export default function LoginForm(props) {
  const [values, setValues] = useState(initialFormValues);
  // ✨ where are my props? Destructure them here
  const { login } = props;
  const onChange = (evt) => {
    const { id, value } = evt.target;
    setValues({ ...values, [id]: value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    login(values);
    // ✨ implement
  };

  const isDisabled = () => {
    // ✨ implement
    // Trimmed username must be >= 3, and
    if (values.username.trim().length < 3) return true;
    // trimmed password must be >= 8 for
    if (values.password.trim().length < 8) return true;
    // the button to become enabled
  };

  return (
    <form id="loginForm" onSubmit={onSubmit}>
      <h2>Login</h2>
      <input
        maxLength={20}
        value={values.username}
        onChange={onChange}
        placeholder="Enter username"
        id="username"
      />
      <input
        maxLength={20}
        value={values.password}
        onChange={onChange}
        placeholder="Enter password"
        id="password"
      />
      <button disabled={isDisabled()} id="submitCredentials" type="submit">
        Submit credentials
      </button>
    </form>
  );
}

// 🔥 No touchy: LoginForm expects the following props exactly:
LoginForm.propTypes = {
  login: PT.func.isRequired,
};
