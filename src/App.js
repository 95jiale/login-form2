import "./App.css";
import FormInput from "./components/FormInput";
import PasswordInput from "./components/PasswordInput";
import React, { useState } from "react";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const [values2, setValues2] = useState({
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include special characters!",
      label: "Username :",
      pattern: "^[A-Za-z0-9]{3,16}$", //regex
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Invalid email!",
      label: "Email :",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      errorMessage: "",
      label: "Birthday :",
    },
  ];
  const inputs2 = [
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and it should include at least 1 uppercase letter, 1 number, 1 special character!",
      label: "Password :",
      pattern:
        "(?=^.{8,}$)((?=.*d)|(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match!",
      label: "Confirm Password :",
      pattern: values.password,
      required: true,
    },
  ];
  console.log("re-rendered");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setValues2({ ...values2, [e.target.name]: e.target.value });
  };

  console.log(values);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          // if (input.id !== 4 || 5) {
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        {inputs2.map((input) => (
          <PasswordInput
            key={input.id}
            {...input}
            value={values2[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default App;
