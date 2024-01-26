import { createElement } from "react";
const Button = ({ children, type, href, classes, onClick, ...props }) => {
  const buttonLike = href ? "a" : "button";
  const button = {
    default: "",
    primary:
      "bg-primary shadow-2xl border-[1px] border-white text-white flex items-center px-[20px] min-h-[57px] rounded-[50px] hover:bg-hover active:bg-active",
    secondary: "bg-secondary hover:bg-hover active:bg-active",
    light:
      "bg-lightprimary shadow-2xl border-[1px] border-white text-white flex items-center px-[20px] min-h-[57px] rounded-[50px] hover:bg-hover active:bg-active",
    dark: "bg-dark hover:bg-hover active:bg-active",
    transparent: "bg-transparent hover:bg-hover active:bg-active",
    "primary-outline":
      "border border-primary text-primary hover:bg-primary hover:text-white active:bg-primary active:text-white",
    "secondary-outline":
      "border border-secondary text-secondary hover:bg-secondary hover:text-white active:bg-secondary active:text-white",
    "light-outline":
      "border border-white text-white hover:bg-white hover:text-dark active:bg-white active:text-dark",
    "dark-outline":
      "border border-dark text-dark hover:bg-dark hover:text-white active:bg-dark active:text-white",
    "transparent-outline":
      "border border-transparent text-white hover:bg-white hover:text-dark active:bg-white active:text-dark",
  };
  const typeButton = button[type] ? button[type] : button.default;

  return createElement(
    buttonLike,
    {
      className: `${typeButton} ${classes ? classes : ""}`,
      ...(href ? { href } : {}),
      onClick,
      ...props,
    },
    children,
  );
};

export default Button;
