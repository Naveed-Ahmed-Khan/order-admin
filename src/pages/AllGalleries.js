import React, { useState } from "react";
import image from "../assets/images/Islamabad.png";
import Select from "../components/UI/Select";

import { useStateContext } from "../contexts/ContextProvider";

export default function AllGalleries() {
  const { events, locations, updateShowDetails } = useStateContext();

  console.log(locations);

  const [filterValue, setFilterValue] = useState("");

  return (
    <div className="pt-[5vh] md:mt-[8vh] w-full px-5 sm:px-10 lg:px-16">
      <section className="mb-10">
        <div className="mb-4 xl:mb-6 items-center justify-between w-full">
          <h2 className="text-3xl text-primary-500 font-semibold leading-tight">
            Places
          </h2>
        </div>
        <div className="h-[18rem] md:w-full rounded-3xl">
          <div className="px-0">
            <div className="flex gap-8 overflow-x-auto scrollbar-thin scrollbar-transparent">
              {locations.length > 0 ? (
                locations?.map((location) => {
                  return (
                    <div
                      key={location.id}
                      onClick={() => {
                        updateShowDetails(location);
                      }}
                      className="relative w-48 h-60 rounded-3xl overflow-clip flex items-center justify-center"
                    >
                      <img
                        className="object-cover h-full w-full hover:scale-125 cursor-pointer transition-all duration-300"
                        src={location.image}
                        alt=""
                      />
                      <p className="absolute bottom-3 left-2 text-white text-sm">
                        {location.city}, {location.country}
                      </p>
                    </div>
                  );
                })
              ) : (
                <div className="h-60 w-full flex items-center justify-center text-2xl text-primary-500">
                  No locations found
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="mt-8 w-20 border-b-8 border-dotted border-primary-500 " />
          </div>
        </div>
      </section>
      <section>
        <div className="mb-4 xl:mb-6 items-center justify-between w-full">
          <h2 className="text-3xl text-primary-500 font-semibold leading-tight">
            Events
          </h2>
        </div>
        <div className="h-[18rem] md:w-full rounded-3xl">
          <div className="px-0">
            <div className="flex gap-8 overflow-x-auto scrollbar-thin scrollbar-transparent">
              {events.length > 0 ? (
                events?.map((event) => {
                  return (
                    <div
                      key={event.id}
                      onClick={() => {
                        updateShowDetails(event);
                      }}
                      className="relative w-48 h-60 rounded-3xl overflow-clip flex items-center justify-center"
                    >
                      <img
                        className="object-cover h-full w-full hover:scale-125 cursor-pointer transition-all duration-300"
                        src={event.image}
                        alt=""
                      />
                      <p className="absolute bottom-3 left-2 text-white text-sm">
                        {event.city}, {event.country}
                      </p>
                    </div>
                  );
                })
              ) : (
                <div className="h-60 w-full flex items-center justify-center text-2xl text-primary-500">
                  No Events found
                </div>
              )}
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
