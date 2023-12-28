import React from "react";
import "./SignFormStyles.css";

const SignFormBase = ({ children, ...restProps }) => (
  <form className="sign-form-base" {...restProps}>
    {children}
  </form>
);

export default SignFormBase;
