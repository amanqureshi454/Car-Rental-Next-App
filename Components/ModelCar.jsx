import React from "react";

const ModelCar = ({ closeHandler, selectedCar }) => {
  const {
    carName,
    imgUrl,
    brand,
    price,
    model,
    rating,
    automatic,
    speed,
    gps,
    seatType,
    fuel,
    year,
  } = selectedCar;
  return (
    <>
      <div
        onClick={closeHandler}
        className="fixed overlay top-0 left-0 z-[5] w-full h-full flex justify-center items-center backdrop-blur-sm opacity-95"
      >
        <div className="modal__car z-10 flex justify-center shadow-sm shadow-black items-center flex-col lg:w-[500px] md:w-[400px] w-[95%]  h-auto lg:p-6 md:p-6 p-4  rounded-xl bg-[#f4f4f4] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="close--img">
            <img
              src="/close.svg"
              alt="close-icon"
              onClick={closeHandler}
              className=" w-[25px] h-[25px] cursor-pointer object-contain absolute right-3 top-3"
            />
          </div>

          <div className="car--img mb-5">
            <img
              src={imgUrl}
              alt=""
              className=" lg:w-[350px] lg:h-[230px] md:w-[350px] md:h-[200px] object-contain"
            />
          </div>
          <div className="car__name border-b border-black p-1 flex justify-between w-full items-center">
            <p className=" text-black text-md lg:m-1 md:m-0 opacity-70">
              Name{" "}
            </p>
            <p className=" text-black text-md lg:m-1 md:m-0">{carName}</p>
          </div>
          <div className="car__name border-b border-black p-1 flex justify-between w-full items-center">
            <p className=" text-black text-md lg:m-1 md:m-0 opacity-70">
              Brand{" "}
            </p>
            <p className=" text-black text-md lg:m-1 md:m-0">{brand}</p>
          </div>
          <div className="car__name border-b border-black p-1 flex justify-between w-full items-center">
            <p className=" text-black text-md lg:m-1 md:m-0 opacity-70">
              Model{" "}
            </p>
            <p className=" text-black text-md lg:m-1 md:m-0">{model}</p>
          </div>
          <div className="car__name border-b border-black p-1 flex justify-between w-full items-center">
            <p className=" text-black text-md lg:m-1 md:m-0 opacity-70">
              Year of Manufacture{" "}
            </p>
            <p className=" text-black text-md lg:m-1 md:m-0">{year}</p>
          </div>
          <div className="car__name border-b border-black p-1 flex justify-between w-full items-center">
            <p className=" text-black text-md lg:m-1 md:m-0 opacity-70">
              Price{" "}
            </p>
            <p className=" text-black text-md lg:m-1 md:m-0">{`$${price}m`}</p>
          </div>
          <div className="car__name border-b border-black p-1 flex justify-between w-full items-center">
            <p className=" text-black text-md lg:m-1 md:m-0 opacity-70">
              Rating{" "}
            </p>
            <p className=" text-black text-md lg:m-1 md:m-0">{rating}</p>
          </div>
          <div className="car__name border-b border-black p-1 flex justify-between w-full items-center">
            <p className=" text-black text-md lg:m-1 md:m-0 opacity-70">
              Fuel{" "}
            </p>
            <p className=" text-black text-md lg:m-1 md:m-0">{fuel}</p>
          </div>
          <div className="car__name border-b border-black p-1 flex justify-between w-full items-center">
            <p className=" text-black text-md lg:m-1 md:m-0 opacity-70">
              Speed{" "}
            </p>
            <p className=" text-black text-md lg:m-1 md:m-0">{speed}</p>
          </div>
          <div className="car__name border-b border-black p-1 flex justify-between w-full items-center">
            <p className=" text-black text-md lg:m-1 md:m-0 opacity-70">
              Automatic{" "}
            </p>
            <p className=" text-black text-md lg:m-1 md:m-0">{automatic}</p>
          </div>
          <div className="car__name border-b border-black p-1 flex justify-between w-full items-center">
            <p className=" text-black text-md lg:m-1 md:m-0 opacity-70">
              SeatType{" "}
            </p>
            <p className=" text-black text-md lg:m-1 md:m-0">{seatType}</p>
          </div>
          <div className="car__name border-b border-black p-1 flex justify-between w-full items-center">
            <p className=" text-black text-md lg:m-1 md:m-0 opacity-70">GPS </p>
            <p className=" text-black text-md lg:m-1 md:m-0">{gps}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelCar;
