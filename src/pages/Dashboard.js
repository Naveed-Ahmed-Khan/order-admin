import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// import { Outlet } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import Sidebar from "../components/UI/Sidebar";
// import HomeBackground from "../components/HomeBackground";
// import { useStateContext } from "../contexts/ContextProvider";

const Dashboard = () => {
  // const { unReadMessages } = useStateContext();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showBackdrop, setShowBackdrop] = useState(false);

  return (
    <>
      <div>
        {/* <HomeBackground /> */}

        <Sidebar
          open={open}
          setOpen={setOpen}
          showBackdrop={showBackdrop}
          setShowBackdrop={setShowBackdrop}
        />

        <Navbar
          open={open}
          setOpen={setOpen}
          showBackdrop={showBackdrop}
          setShowBackdrop={setShowBackdrop}
          setIsChatOpen={setIsChatOpen}
          isChatOpen={isChatOpen}
        />
        <div className="pt-14 md:pt-0 md:ml-40 relative overflow-auto ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
