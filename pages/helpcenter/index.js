import Image from "next/image";
import React from "react";

const HelpCenter = () => {
  return (
    <>
      <div className="lg:px-52 px-12 lg:grid flex lg:grid-cols-2 flex-col-reverse lg:h-[80vh] items-center lg:py-20 pt-20 mb-5">
        <div>
          <h2 className="text-4xl font-semibold text-dark-blue my-3">
            Do you have any trouble using our app?
          </h2>
          <h2 className="text-2xl font-medium text-gray-500 ">
            Feel free to sent us your problem about the app
          </h2>
          <input
            type="email"
            className="bg-[#E4E4E4] mt-5 py-3 lg:w-1/2 w-full rounded-md focus:outline-0 px-6 block"
            placeholder="Email"
          />
          <input
            type="text"
            className="bg-[#E4E4E4] mt-5 py-3 lg:w-1/2 w-full rounded-md focus:outline-0 px-6 block"
            placeholder="Name"
          />
          <textarea
            id="message"
            rows="4"
            className="block focus:outline-0 bg-[#E4E4E4] mt-5 py-3 lg:w-1/2 w-full rounded-md px-6"
            placeholder="Your message..."
          ></textarea>
          <button className="bg-sea-blue mt-5 py-3 lg:w-1/2 w-full rounded-md text-white hover:bg-[#448DF8] active:bg-[#448DF8] capitalize ">
            submit
          </button>
        </div>
        <div className="text-center">
          <Image src="/Feedback.png" width={600} height={550} />
        </div>
      </div>
    </>
  );
};

export default HelpCenter;
