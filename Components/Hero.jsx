import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero max-w-7xl mx-auto p-5 relative lg:pb-16 lg:mb-14 mb-2 pb-2">
        <nav className=" flex justify-between items-center">
          <div className="logo__header">
            <img className="w-24 lg:h-24 md:h-24 h-8 object-contain " src="logo.svg" alt="" />
          </div>
          <div className="btn__header">
            <button className=" bg-[#f4f4f4] text-black rounded-3xl w-[130px] py-3 px-3 border-none outline-none">
              Sign Up
            </button>
          </div>
        </nav>
        <div className="main__section flex justify-between lg:flex-row md:flex-row flex-col items-center gap-5 lg:mt-20 md:mt-20 mt-10">
          <div className="main__text lg:w-[40%] w-full">
            <h1
              className=" text-black lg:text-7xl text-4xl text-left capitalize font-semibold"
              style={{ lineHeight: "1.1" }}
            >
              Find ,book rent a car--quick and super easy !
            </h1>
            <div className="main__text--content mt-6">
              <p className=" text-black text-lg opacity-80 text-left capitalize font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita aperiam dolorem suscipit at
              </p>
              <button className=" bg-blue-700 mt-10 text-white rounded-3xl w-[130px] py-3 px-3 border-none outline-none">
                Explore Cars
              </button>
            </div>
          </div>
          <div className="main__img lg:w-[60%] w-full">
            <img
              className="w-[720px] h-[400px] object-contain ml-auto"
              src="hero.png"
              alt="toyota"
            />
            <div className="blue-bg-img lg:block hidden">
              <img
                src="bg-2.jpg"
                className=" w-[750px] h-[650px] -z-10 absolute right-0 top-24 "
                style={{ borderRadius: "50px" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
