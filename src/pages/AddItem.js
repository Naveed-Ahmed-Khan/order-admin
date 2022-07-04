import React from "react";
import event from "../assets/images/event.png";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import TextArea from "../components/UI/TextArea";

export default function AddItem() {
  return (
    <div className="pt-[5vh] md:mt-[12vh] w-full mx-auto max-w-6xl pb-8 px-5 sm:px-10 lg:px-16">
      <section className="flex flex-col xl:flex-row items-center xl:items-start gap-12 ">
        <div className="relative overflow-clip">
          <img src={event} alt="" />
          <div className="absolute -right-20 -bottom-20 w-40 h-40 rounded-full bg-primary-500 cursor-pointer" />
          <div className="">
            <svg
              className="absolute right-4 bottom-4 w-8 h-8 cursor-pointer"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.5192 12.8243L11.1608 28.6909C10.2831 29.542 9.18333 30.1458 7.97914 30.4377L1.70315 31.9591C0.700009 32.2023 -0.208644 31.3212 0.0421425 30.3485L1.61114 24.2627C1.91219 23.095 2.53485 22.0285 3.41254 21.1774L19.771 5.31091L27.5192 12.8243ZM31.3953 1.55608C33.5349 3.63086 33.5349 6.99473 31.3953 9.0695L29.4563 10.946L21.7081 3.43256L23.6471 1.55608C25.7867 -0.518694 29.2557 -0.518694 31.3953 1.55608Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="w-full max-w-lg flex flex-col gap-7">
          <Input placeholder="Event Name" />
          <Input placeholder="Address" />
          <Input placeholder="City" />
          <Input placeholder="Country" />
          <div className="flex gap-4">
            <Input placeholder="Date" />
            <Input placeholder="Time" />
          </div>

          <TextArea rows={5} placeholder="Description" />
          <Button>
            <p className="text-white text-xl">Add</p>
          </Button>
        </div>
      </section>
    </div>
  );
}
