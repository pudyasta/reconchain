import React from "react";
import Image from "next/future/image";
const Qrcode = ({ svg, text }) => {
  return (
    <div className="flex items-center flex-col">
      <Image src={svg} width={150} height={150} alt="qr code" />
      <h2 className="lg:text-medium break-words text-medium font-medium text-dark-blue  my-2">
        {text}
      </h2>
      <input type="checkbox" className="lg:w-5 lg:w-5 w-6 h-6" />
    </div>
  );
};

export default Qrcode;
