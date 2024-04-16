"use client";

import React, { useEffect, useState } from "react";
import data from "../app/utils/carData.json";

import Card from "./Card";

const CarCatalogue = () => {
  const [carData, setCarData] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [activeFuel, setActiveFuel] = useState("");
  const [activeYear, setActiveYear] = useState("");

  useEffect(() => {
    setCarData(data);
  }, []);

  const handleFuelChange = (fuelType) => {
    setActiveFuel(fuelType);
    setSelectedFuel(fuelType);
  };
  const handleYearModel = (yearModel) => {
    setActiveYear(yearModel);
    setSelectedYear(yearModel);
  };
  const handlerRestart = () => {
    setQuery("");
    setSelectedFuel("");
    setSelectedYear("");
  };

  const searchHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="car__container max-w-7xl mx-auto p-5 relative mt-5">
        <div className="car__heading">
          <h1
            className=" text-black text-5xl text-left capitalize font-semibold"
            style={{ lineHeight: "1.1" }}
          >
            Car Catalogue
          </h1>
          <p className=" text-black text-lg opacity-80 text-left capitalize font-normal mt-4">
            Lorem ipsum, dolor sit amet consectetur
          </p>
        </div>
        <div className="car__filter flex lg:justify-between lg:flex-row md:flex-row  flex-col items-center lg:my-12 my-6 gap-4 lg:gap-10">
          <div className="car__search--bar lg:w-[70%] md:w-[60%] w-full relative">
            <input
              type="text"
              value={query}
              onChange={searchHandler}
              className="w-full p-4 text-black bg-gray-300 rounded-lg"
              placeholder="Search For Your Car ...."
            />
            <img
              src="magnifying-glass.svg"
              className="w-10 h-10 object-contain absolute right-3 top-2 cursor-pointer"
              alt=""
            />
          </div>
          <div className="fuel--year flex gap-6 lg:w-[30%] md:w-[40%] w-full lg:justify-end justify-center items-center">
            <div className="dropdown inline-block relative w-[50%]">
              <button className="bg-gray-300 text-gray-700 font-semibold lg:w-[130px] w-full py-3 text-lg px-4 rounded-lg inline-flex justify-center items-center">
                <span className="mr-1">Fuel</span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul className="dropdown-menu absolute w-full hidden text-gray-700 pt-1">
                <li className="cursor-pointer">
                  {[...new Set(carData.map((data) => data.fuel))].map(
                    (fuel, index) => (
                      <a
                        key={index}
                        className={`rounded-t bg-gray-200 w-full ${
                          activeFuel === fuel
                            ? "bg-gray-800 text-white"
                            : "hover:bg-gray-400"
                        } py-2 px-4 block whitespace-no-wrap`}
                        onClick={() => handleFuelChange(fuel)}
                      >
                        {fuel}
                      </a>
                    )
                  )}
                </li>
              </ul>
            </div>
            <div className="dropdown inline-block relative w-[50%]">
              <button className="bg-gray-300 text-gray-700 font-semibold lg:w-[130px] w-full py-3 text-lg px-4 rounded-lg inline-flex justify-center items-center">
                <span className="mr-1 text-center">Year</span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                </svg>
              </button>
              <ul className="dropdown-menu absolute z-10 hidden w-full text-gray-700 pt-1">
                <li className=" cursor-pointer">
                  {Array.from(new Set(carData.map((item) => item.year)))
                    .sort((a, b) => b - a) // Sort unique years in ascending order
                    .map((year, index) => (
                      <a
                        key={index}
                        className={`bg-gray-200  py-2 px-4 block whitespace-no-wrap ${
                          activeYear === year
                            ? "bg-gray-800 text-white"
                            : "hover:bg-gray-400"
                        }`}
                        onClick={() => handleYearModel(year)}
                      >
                        {year}
                      </a>
                    ))}
                </li>
              </ul>
            </div>
            <div
              className="restart__btn p-2 bg-gray-300 rounded-md hover:bg-gray-400"
              onClick={handlerRestart}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="car__cards--conatiner flex justify-between items-center lg:gap-4 md:gap-2 flex-wrap">
          <Card
            searchQuery={query}
            fuelType={selectedFuel}
            yearModel={selectedYear}
          />
        </div>
      </div>
    </>
  );
};

export default CarCatalogue;
