import React from "react";
import Row from "./components/Row";
import Rules from "./components/Rule";

const Term = () => {
  return (
    <>
      <h2 className="text-4xl uppercase text-center mt-16 font-bold">
        Reconchain app terms and conditions
      </h2>
      <div className="mx-52 my-24">
        <Row num={1} head="introduction">
          <Rules num={1} />
          <Rules num={2} />
          <Rules num={3} />
        </Row>
        <Row num={2} head="privacy">
          <Rules num={1} />
          <Rules num={2} />
          <Rules num={3} />
        </Row>
        <Row num={3} head="security">
          <Rules num={1} />
          <Rules num={2} />
          <Rules num={3} />
        </Row>
      </div>
    </>
  );
};

export default Term;
