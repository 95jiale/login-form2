import React, { useState } from "react";
import "../styles/passwordInput.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const PasswordInput = (props) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  const toggle = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <div className="formInput">
      <label>{label}</label>

      <container>
        <span>{errorMessage}</span>
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}
          type={showPassword ? "password" : "text"}
        />
        <button className="showPassword" onClick={toggle}>
          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </button>
      </container>
    </div>
  );
};

export default PasswordInput;
