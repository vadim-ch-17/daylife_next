import { createElement, useEffect, useRef } from "react";
const Button = ({ children, type, href, hoverAnimation, classes, onClick, label, ...props }) => {
  const buttonLike = href ? "a" : "button";
  const buttonRef = useRef(null);

  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const mouseEnterHandler = function (e) {
      let parentOffset = this.getBoundingClientRect(),
        relX = e.clientX - parentOffset.left,
        relY = e.clientY - parentOffset.top;
      const span = this.querySelector('.span');
      if (span) {
        span.style.top = relY + 'px';
        span.style.left = relX + 'px';
      }
    };

    const mouseOutHandler = function (e) {
      let parentOffset = this.getBoundingClientRect(),
        relX = e.clientX - parentOffset.left,
        relY = e.clientY - parentOffset.top;
      const span = this.querySelector('.span');
      if (span) {
        span.style.top = relY + 'px';
        span.style.left = relX + 'px';
      }
    };

    btn.addEventListener('mouseenter', mouseEnterHandler);
    btn.addEventListener('mouseout', mouseOutHandler);

    return () => {
      btn.removeEventListener('mouseenter', mouseEnterHandler);
      btn.removeEventListener('mouseout', mouseOutHandler);
    };
  }, []);

  const button = {
    default: "",
    primary:
      "group bg-primary overflow-hidden relative z-[1] shadow-2xl border-[1px] border-white text-white flex items-center px-[20px] min-h-[57px] rounded-[50px] hover:bg-hover active:bg-active",
    secondary: "bg-secondary hover:bg-hover active:bg-active",
    light:
      "group bg-lightprimary overflow-hidden relative z-[1] shadow-2xl border-[1px] border-white text-white flex items-center px-[20px] min-h-[57px] rounded-[50px] hover:bg-hover active:bg-active",
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
      ref: buttonRef,
      className: `${typeButton} ${classes ? classes : ""}`,
      ...(href ? { href } : {}),
      onClick,
      'aria-label': label,
      ...props,
    },
    hoverAnimation ? createElement("span", { className: `span group-hover:w-[225%] group-hover:h-[550px] -translate-x-2/4 -translate-y-2/4 ${type === 'primary' ? 'bg-primaryhover' : 'bg-lightprimaryhover'} overflow-hidden absolute block w-0 h-0 rounded-full z-under transition-all duration-300` }) : null,
    children,
  );
};

export default Button;
