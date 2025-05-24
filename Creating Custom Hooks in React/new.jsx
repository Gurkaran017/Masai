import React from "react";
import useForm from "./useForm"; // assuming useForm is exported from useForm.js

function SignupForm() {
  const { values, handleChange, resetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(values));
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        value={values.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
        type="email"
      />
      <input
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Password"
        type="password"
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;
