import Image from "next/image";

const Home = () => {
  return (
    <>
      <nav className="py-6 lg:px-52 px-12 bg-dark-blue">
        <h2 className="capitalize font-semibold text-2xl text-sea-blue">
          recon chain
        </h2>
      </nav>

      <div className="lg:px-52 px-12 lg:grid flex lg:grid-cols-2 flex-col-reverse h-2/3 items-center lg:py-20 pt-20 mb-5">
        <div>
          <h2 className="text-5xl font-semibold text-dark-blue my-3">
            Tracking Carbon
          </h2>
          <h2 className="text-2xl font-semibold text-dark-blue">
            ID Product IDX909090909
          </h2>
        </div>
        <div className="text-center">
          <Image src="/destination.png" width={550} height={400} />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 lg:px-52 md:px-48 px-12 pb-20 ">
        <div>
          <h2 className="text-2xl font-semibold capitalize ">product name</h2>
          <h2 className="text-xl  capitalize tracking-wide">
            Le mineral ngga manis
          </h2>

          <h2 className="text-2xl font-semibold capitalize lg:mt-10 mt-5">
            company
          </h2>
          <h2 className="text-xl  capitalize tracking-wide">
            PT Vokasi Indonesia
          </h2>

          <h2 className="text-2xl font-semibold capitalize lg:mt-10 mt-5">
            raw materials
          </h2>
          <h2 className="text-xl  capitalize tracking-wide">
            Air, Pengawet, Tanpa gula
          </h2>

          <h2 className="text-2xl font-semibold capitalize lg:mt-10 mt-5">
            Manufacture
          </h2>
          <h2 className="text-xl  capitalize tracking-wide">17 August 1945</h2>
          <h2 className="text-xl  capitalize tracking-wide">
            Sidomuncul Semarang
          </h2>
        </div>
        <div>
          <h2 className="text-xl  capitalize tracking-wide text-center">
            37.5 Kg Carbon released for this product
          </h2>
          <div className="wrapper mt-10 flex">
            <div className="stepblock mt-5 ">
              <div className="circle-wrapper  grid grid-cols-6 ">
                <div className=" grid grid-rows-2 lg:col-start-2 lg:mt-5 mt-10">
                  <div className="relative  circle w-10 h-10  bg-black rounded-full flex after:w-2 after:lg:h-52 after:bg-[#D9D9D9] after:inset-x-0 after:absolute after:m-auto after:z-[-3] lg:mb-32 mb-52  after:h-64 after:last:hidden last:mt-0">
                    <div className="w-8 h-8 border-white border-4 bg-sea-blue rounded-full m-auto "></div>
                  </div>
                  <div className="relative lg:mt-5 mt-10  circle w-10 h-10  bg-black rounded-full flex after:w-2 after:lg:h-52 after:bg-[#D9D9D9] after:inset-x-0 after:absolute after:m-auto after:z-[-3] lg:mb-32 mb-52  after:h-64 after:last:hidden last:mt-0">
                    <div className="w-8 h-8 border-white border-4 bg-sea-blue rounded-full m-auto "></div>
                  </div>
                </div>

                <div className="grid grid-rows-2 col-start-3 col-span-5">
                  <div className="data">
                    <h2 className="text-xl capitalize font-semibold">
                      Distribution | 19 Oktober 2022
                    </h2>
                    <h2 className="text-lg capitalize font-medium">
                      Gudang Pertamina Solo
                    </h2>
                    <h2 className="text-lg capitalize font-medium">
                      15 Kg Emission Carbon released
                    </h2>
                  </div>
                  <div className="data">
                    <h2 className="text-xl capitalize font-semibold">
                      Distribution | 19 Oktober 2022
                    </h2>
                    <h2 className="text-lg capitalize font-medium">
                      Gudang Pertamina Solo
                    </h2>
                    <h2 className="text-lg capitalize font-medium">
                      15 Kg Emission Carbon released
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
