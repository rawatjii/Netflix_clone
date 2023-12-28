import React from "react";
import "./SignFormStyles.css";

const SignFormTitle = ({ children, ...restProps }) => (
  <h1 className="sign-form-title" {...restProps}>
    {children}
  </h1>
);

export default SignFormTitle;
