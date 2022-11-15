import React from "react";
import Image from "next/future/image";

const ToPrint = React.forwardRef((props, ref) => {
  const { svg, qr } = props;
  return (
    <div ref={ref}>
      <div className="mt-10 mb-5">
        <h2 className="text-center text-3xl font-bold">Recon Chain</h2>
        <h2 className="text-center text-xl font-medium">
          Take a little action for taking down the climate change
        </h2>
      </div>
      <div className="grid grid-cols-4  ">
        {qr.map((id, i) => (
          <div
            key={i}
            className="flex flex-col m-auto items-center border-b-2 mt-10 mx-8"
          >
            <Image src={svg[i]} width={100} height={100} alt="qr code" />
            <h2 className="lg:text-lg text-medium font-medium text-dark-blue  my-2">
              {id}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
});

export default ToPrint;
