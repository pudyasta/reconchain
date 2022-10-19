import React from "react";

const Row = ({ children, head, num }) => {
  return (
    <>
      <div className="my-10">
        <h2 className="lg:text-2xl uppercase font-bold">
          {num ? num : "XX"}
          {". "} {head ? head : "lorem ipsum"}
        </h2>
        {children}
      </div>
    </>
  );
};

export default Row;
