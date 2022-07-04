import React, { useState } from "react";
import image from "../assets/images/Islamabad.png";
import { useStateContext } from "../contexts/ContextProvider";
import Select from "./UI/Select";
// import { useStateContext } from "../contexts/ContextProvider";

export default function Gallery(props) {
  // const { users } = useStateContext();
  const [filterValue, setFilterValue] = useState("");
  const { updateShowDetails } = useStateContext();

  return (
    <div className="w-full sm:mr-auto sm:ml-auto xl:mr-auto xl:ml-0">
      <div className="">
        <div className="mb-4 xl:mb-8 items-center justify-between w-full">
          <div className="w-fit">
            <Select />
          </div>
          <h2 className="text-4xl text-primary-500 font-semibold leading-tight">
            Pakistan, Skardu
          </h2>
        </div>
        <div className="h-[18rem] md:w-full rounded-3xl">
          <div className="px-0">
            <div className="flex gap-8 overflow-x-auto scrollbar-thin scrollbar-transparent ">
              <img
                onClick={() => {
                  updateShowDetails(true);
                }}
                className="object-contain rounded-md hover:scale-125 cursor-pointer transition-all duration-300"
                src={image}
                alt=""
              />
              <img
                onClick={() => {
                  updateShowDetails(true);
                }}
                className="object-contain rounded-md hover:scale-125 cursor-pointer transition-all duration-300 "
                src={image}
                alt=""
              />
              <img
                onClick={() => {
                  updateShowDetails(true);
                }}
                className="object-contain rounded-md hover:scale-125 cursor-pointer transition-all duration-300 "
                src={image}
                alt=""
              />
              <img
                onClick={() => {
                  updateShowDetails(true);
                }}
                className="object-contain rounded-md hover:scale-125 cursor-pointer transition-all duration-300 "
                src={image}
                alt=""
              />
              <img
                onClick={() => {
                  updateShowDetails(true);
                }}
                className="object-contain rounded-md hover:scale-125 cursor-pointer transition-all duration-300 "
                src={image}
                alt=""
              />
              <img
                onClick={() => {
                  updateShowDetails(true);
                }}
                className="object-contain rounded-md hover:scale-125 cursor-pointer transition-all duration-300 "
                src={image}
                alt=""
              />
              <img
                onClick={() => {
                  updateShowDetails(true);
                }}
                className="object-contain rounded-md hover:scale-125 cursor-pointer transition-all duration-300 "
                src={image}
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="mt-8 w-20 border-b-8 border-dotted border-primary-500 " />
          </div>
        </div>
      </div>
    </div>
  );
}
