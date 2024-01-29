import React from "react";

interface IButton {
  As: "button" | "a";
  type?: "button" | "submit" | "reset";
  href?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const defaultProps = {
  type: null,
  href: null,
  className: null,
  children: null,
  onClick: () => {},
  disabled: false,
};

function Button(props: IButton) {
  const { As, type, href, className, children, onClick, disabled } = props;

  return (
    <As
      type={type}
      href={href}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </As>
  );
}

Button.defaultProps = defaultProps;

export default Button;
