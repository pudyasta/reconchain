import React from "react";

const Rules = ({ num, text }) => {
  return (
    <>
      <p className="lg:text-lg lg:ml-8 ml-5">
        {num ? num : "1"}
        {". "}
        {!text
          ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam autem incidunt quibusdam aspernatur suscipit consectetur reiciendis sed asperiores? Autem, voluptatum soluta quam dolorem nam aliquam rationebeatae in nostrum natus"
          : text}
      </p>
    </>
  );
};

export default Rules;
