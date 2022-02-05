import React from "react";
import classnames from "classnames";

const Button = ({ children, className, ...rest }) => (
  <button className={classnames("button", className)} {...rest}>
    {children}
  </button>
);

export default Button;
