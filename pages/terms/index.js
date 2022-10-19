import React from "react";
import Row from "./components/Row";
import Rules from "./components/Rule";

const Term = () => {
  return (
    <>
      <h2 className="lg:text-4xl text-xl uppercase text-center mt-16 font-bold">
        Reconchain app terms and conditions
      </h2>
      <div className="lg:mx-52 mx-6 lg:my-24">
        <Row num={1} head="introduction">
          <Rules
            num={"a"}
            text="Welcome to RECON CHAIN website. RECON CHAIN is a platform in order to record carbon footprints using blockchain technology as effort to tackle climate change. This platform is provided to you by Terraphere team"
          />
          <Rules
            num={"b"}
            text="The information provided on this site is not falsified and benefits some companies. we do not cooperate with any company to falsify their product data"
          />
          <Rules
            num={"c"}
            text="We do not place any advertisements for profit on this platform. We made this application only to help people to participate in preventing climate change."
          />
        </Row>
        <Row num={2} head="privacy">
          <Rules
            num={"a"}
            text="We don't sell company data, and we don't use the data for personal gain that can harm a company"
          />
          <Rules
            num={"b"}
            text="We do not ask consumers to sign up and give their personal data to use this application when they want to see the data that contain on a QR of a product"
          />
        </Row>
        <Row num={3} head="security">
          <Rules
            num={"a"}
            text="The blockchain we use in RECON CHAIN allows the stored data to be safe and cannot be changed by certain parties to falsify product data that can harm consumers and the environment."
          />
        </Row>
      </div>
    </>
  );
};

export default Term;
