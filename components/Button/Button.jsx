import React from "react";

const Button = (props) => {
  if (props.variant == "danger") {
    return (
      <button
        className={
          `py-3 px-5  text-white ${
            props.type == `contain`
              ? `hover:bg-red-80 active:bg-red-800 bg-red-600`
              : `text-red-700 hover:text-red-80 active:text-red-800`
          } capitalize ` + props.className
        }
      >
        {props.children}
      </button>
    );
  } else {
    return (
      <button
        className={
          `  py-3  px-5 text-white ${
            props.type == `contain`
              ? `hover:bg-[#448DF8] active:bg-[#448DF8]  bg-sea-blue`
              : `hover:text-[#448DF8] active:text-[#448DF8]  text-sea-blue`
          } capitalize ` + props.className
        }
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  }
};

export default Button;
