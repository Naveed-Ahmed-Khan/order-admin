import React, { useState } from "react";
import image from "../assets/images/Islamabad.png";
import Select from "../components/UI/Select";

// import { useStateContext } from "../contexts/ContextProvider";

export default function AllGalleries() {
  // const { users } = useStateContext();
  const [filterValue, setFilterValue] = useState("");

  return (
    <div className="pt-[5vh] md:mt-[8vh] w-full px-5 sm:px-10 lg:px-16">
      <section className="mb-10">
        <div className="mb-4 xl:mb-8 items-center justify-between w-full">
          <h2 className="text-4xl text-primary-500 font-semibold leading-tight">
            Places
          </h2>
        </div>
        <div className="h-[18rem] md:w-full rounded-3xl">
          <div className="px-0">
            <div className="flex gap-8 overflow-x-auto scrollbar-thin scrollbar-transparent">
              <img className="object-contain rounded-md" src={image} alt="" />
              <img className="object-contain rounded-md " src={image} alt="" />
              <img className="object-contain rounded-md " src={image} alt="" />
              <img className="object-contain rounded-md " src={image} alt="" />
              <img className="object-contain rounded-md " src={image} alt="" />
              <img className="object-contain rounded-md " src={image} alt="" />
              <img className="object-contain rounded-md " src={image} alt="" />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="mt-8 w-20 border-b-8 border-dotted border-primary-500 " />
          </div>
        </div>
      </section>
      <section>
        <div className="mb-4 xl:mb-8 items-center justify-between w-full">
          <h2 className="text-4xl text-primary-500 font-semibold leading-tight">
            Events
          </h2>
        </div>
        <div className="h-[18rem] md:w-full rounded-3xl">
          <div className="px-0">
            <div className="flex gap-8 overflow-x-auto scrollbar-thin scrollbar-transparent">
              <img className="object-contain rounded-md" src={image} alt="" />
              <img className="object-contain rounded-md " src={image} alt="" />
              <img className="object-contain rounded-md " src={image} alt="" />
              <img className="object-contain rounded-md " src={image} alt="" />
              <img className="object-contain rounded-md " src={image} alt="" />
              <img className="object-contain rounded-md " src={image} alt="" />
              <img className="object-contain rounded-md " src={image} alt="" />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="mt-8 w-20 border-b-8 border-dotted border-primary-500 " />
          </div>
        </div>
      </section>
    </div>
  );
}
