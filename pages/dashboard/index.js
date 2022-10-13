import Image from "next/future/image";
import React, { useState } from "react";
import Button from "../../components/Button/Button";
import { Icon } from "@iconify/react";
const Dashboard = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <div
        className={`lg:px-52 px-12 lg:grid flex lg:grid-cols-2 ${
          !show ? `flex-col-reverse` : `flex-col`
        } min-h-[75vh] items-center lg:py-20 pt-20 mb-5`}
      >
        <div>
          <h2 className="text-3xl font-semibold text-dark-blue my-3">
            Batch Generate
          </h2>
          <h2 className="text-lg font-medium text-dark-blue">
            Input how many QR codes you want to generate
          </h2>
          <input
            type="number"
            className="bg-[#E4E4E4] mt-5 py-3 lg:w-1/2 w-full rounded-md focus:outline-0 px-6 block"
          />
          <button
            className="bg-sea-blue mt-5 py-3 lg:w-1/2 w-full rounded-md text-white hover:bg-[#448DF8] active:bg-[#448DF8] capitalize "
            onClick={handleClick}
          >
            generate
          </button>
        </div>
        <div className={`text-center  ${show ? `lg:mt-0 mt-20` : `m-auto`}`}>
          {!show ? (
            <Image
              src="/business.png"
              width={600}
              height={450}
              alt="A man and a woman talking about business graph"
              priority={true}
            />
          ) : (
            <>
              <h2 className="text-xl font-medium text-dark-blue mb-10">
                QR code created successfully
              </h2>
              <div className="grid lg:grid-cols-4 grid-cols-2 gap-10 ">
                <div className="flex items-center flex-col ">
                  <Image src="/qr.png" width={80} height={80} alt="qr code" />
                  <h2 className="lg:text-lg text-medium font-medium text-dark-blue  my-2">
                    IDX3415777909
                  </h2>
                  <input type="checkbox" className="lg:w-5 lg:w-5 w-6 h-6" />
                </div>
                <div className="flex items-center flex-col ">
                  <Image src="/qr.png" width={80} height={80} alt="qr code" />
                  <h2 className="lg:text-lg text-medium font-medium text-dark-blue  my-2">
                    IDX3415777909
                  </h2>
                  <input type="checkbox" className="lg:w-5 lg:w-5 w-6 h-6" />
                </div>
                <div className="flex items-center flex-col ">
                  <Image src="/qr.png" width={80} height={80} alt="qr code" />
                  <h2 className="lg:text-lg text-medium font-medium text-dark-blue  my-2">
                    IDX3415777909
                  </h2>
                  <input type="checkbox" className="lg:w-5 lg:w-5 w-6 h-6" />
                </div>
                <div className="flex items-center flex-col ">
                  <Image src="/qr.png" width={80} height={80} alt="qr code" />
                  <h2 className="lg:text-lg text-medium font-medium text-dark-blue  my-2">
                    IDX3415777909
                  </h2>
                  <input type="checkbox" className="lg:w-5 lg:w-5 w-6 h-6" />
                </div>
                <div className="flex items-center flex-col ">
                  <Image src="/qr.png" width={80} height={80} alt="qr code" />
                  <h2 className="lg:text-lg text-medium font-medium text-dark-blue  my-2">
                    IDX3415777909
                  </h2>
                  <input type="checkbox" className="lg:w-5 lg:w-5 w-6 h-6" />
                </div>
                <div className="flex items-center flex-col ">
                  <Image src="/qr.png" width={80} height={80} alt="qr code" />
                  <h2 className="lg:text-lg text-medium font-medium text-dark-blue  my-2">
                    IDX3415777909
                  </h2>
                  <input type="checkbox" className="lg:w-5 lg:w-5 w-6 h-6" />
                </div>
              </div>
              <button className="bg-dark-blue mr-5 mt-5 py-3  lg:w-2/5 w-full rounded-md text-white hover:bg-[#448DF8] active:bg-[#448DF8] capitalize inline">
                print all
              </button>
              <Button type="contain" className="rounded-md lg:w-2/5 w-full">
                Print selected
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="flex lg:justify-end justify-center lg:w-4/5 w-full lg:px-0 px-12 mb-5 gap-x-3 mt-14  flex-wrap">
        <div className="relative mb-5 flex items-center lg:w-80 w-full">
          <input
            type="text"
            className="bg-[#E4E4E4]  rounded-md focus:outline-0 px-6 py-2  w-full"
            placeholder="Filter ID"
          />
          <Button className="rounded-md py-2 absolute right-0 ">
            <Icon icon={"bi:search"} />
          </Button>
        </div>
        <div className="gap-x-3 flex flex-wrap mb-5">
          <Button type="contain" className="rounded-md py-2">
            Print
          </Button>
          <Button type="contain" variant="danger" className="rounded-md py-2">
            delete
          </Button>
        </div>
      </div>
      <div className="md:px-52 md:w-full w-2/3  md:flex justify-center lg:overflow-x-hidden overflow-x-scroll  m-auto pb-10 flex-col items-center">
        <table className="table-auto w-4/5 ">
          <thead className="">
            <tr className="text-left border-y-2">
              <th className="w-24 uppercase px-5 ">
                <input type="checkbox" className=" w-5  h-6" />
              </th>
              <th className="w-80 uppercase px-10 ">id</th>
              <th className="w-32 py-3 px-5">Status</th>
              <th className="w-80 px-10">Product Name</th>
              <th className="w-42 px-10 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-y-2">
              <td className="px-5 py-3">
                {" "}
                <input type="checkbox" className="w-5 h-6" />
              </td>
              <td className="px-10 py-3">IDX3415777909</td>
              <td className="w-32 px-5">Bookedsssssssssss</td>
              <td className="w-80 px-10">Le mineral engga manis</td>
              <td className="w-42 px-10 text-center">
                <Button>print</Button>
                <Button variant="danger">delete</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
