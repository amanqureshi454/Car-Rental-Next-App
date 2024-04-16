"use client";

import Image from "next/image";
import data from "../app/utils/carData";
import { useEffect, useState } from "react";
import ModelCar from "./ModelCar";

const Card = ({ searchQuery, yearModel, fuelType }) => {
  const [carData, setCarData] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [modelIsOpen, setModelIsOpen] = useState(false);
  useEffect(() => {
    setCarData(data);
  }, []);

  // Filter cars based on search query
  const filterCarsBySearchQuery = (cars) => {
    return cars.filter((car) =>
      car.carName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Filter cars based on fuel type
  const filterCarsByFuelType = (cars) => {
    if (!fuelType) return cars; // If no fuelType is selected, return all cars
    return cars.filter((car) => car.fuel === fuelType);
  };

  // Filter cars based on year
  const filterCarsByYear = (cars) => {
    if (!yearModel) return cars; // If no yearModel is selected, return all cars
    return cars.filter((car) => car.year === yearModel);
  };

  const modelHandler = (car) => {
    setSelectedCar(car);
    setModelIsOpen(true);
  };

  const closeHandler = () => {
    setSelectedCar(null);
    setModelIsOpen(false);
  };
  let filteredCars = carData;
  filteredCars = filterCarsBySearchQuery(filteredCars);
  filteredCars = filterCarsByFuelType(filteredCars);
  filteredCars = filterCarsByYear(filteredCars);
  const renderCard = (cars) => {
    return (
      <div
        className="cards p-6 md:p-3 lg:mb-0 mb-5 bg-gray-300 lg:w-[400px] md:w-[350px] w-full h-auto rounded-lg"
        key={cars.id}
      >
        <h3
          className=" text-black text-2xl mb-4 text-left capitalize font-semibold"
          style={{ lineHeight: "1.1" }}
        >
          {cars.carName}
        </h3>
        <div className="cars__milege">
          <div className=" text-black text-2xl">
            <p className=" text-black text-lg ">$</p>
            <p className=" text-black -mt-2 ml-1">54</p>
            <p className=" text-black text-lg -mt-2 ml-2">/day</p>
          </div>
        </div>
        <div className="cards__img">
          <img
            src={`${cars.imgUrl}`} // Ensure that the src starts with a leading slash
            className="w-[280px] h-[200px] mx-auto"
            alt={cars.carName}
          />
        </div>
        <div className="cards__feature-car mt-10">
          <div className="feature-car-wrapper flex justify-between items-center">
            {cars.automatic && cars.automatic !== "NoAutomatic" && (
              <div>
                <img
                  src="steering-wheel.svg"
                  className="w-10 h-10 object-contain mx-auto"
                  alt="gas"
                />
                <h6 className="text-black text-lg text-left capitalize font-semibold mt-3 opacity-75">
                  Automatic
                </h6>
              </div>
            )}

            <div>
              <img
                src="tire.svg"
                className="w-10 h-10 object-contain mx-auto"
                alt="awd"
              />
              <h6 className="text-black text-lg text-left capitalize font-semibold mt-3 opacity-75">
                AWD
              </h6>
            </div>
            {cars.fuel && cars.fuel !== "Electric" && (
              <div>
                <img
                  src="gas.svg"
                  className="w-10 h-10 object-contain mx-auto"
                  alt="fuel"
                />
                <h6 className="text-black text-lg text-left capitalize font-semibold mt-3 opacity-75">
                  Fuel
                </h6>
              </div>
            )}
          </div>
          <button
            onClick={() => modelHandler(cars)}
            className="bg-blue-700 mt-5 text-white rounded-3xl w-full py-3 px-3 border-none outline-none flex justify-center items-center gap-2 "
          >
            Show More
          </button>
          {modelIsOpen && selectedCar && (
            <ModelCar selectedCar={selectedCar} closeHandler={closeHandler} />
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {filteredCars.length === 0 ? (
        <h1 className=" h-[60vh] w-full text-center text-black text-4xl capitalize font-bold">
          No results found
        </h1>
      ) : (
        filteredCars.map((car) => renderCard(car))
      )}
    </>
  );
};
export default Card;
