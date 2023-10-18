import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {

    const [state, setState] = useState<boolean>(false);

    const dropDown = () => {
      setState(!state);
    };

  return (
    <div className="h-[70px] w-full flex justify-center items-center ">
      <div className="w-[85%] flex justify-between items-center small:w-[95%]">
        <div className="font-bold text-[30px]">EcoFunds</div>
        <div className="flex gap-5 font-medium meduim:hidden small:hidden">
          <nav>Home</nav>
          <nav>Launch a campaign</nav>
        </div>
        <button className="py-2 px-4 bg-[#7FD096] rounded-md text-white meduim:hidden small:hidden">Get started</button>
        <div
              className="p-2 rounded-[50%] hover:bg-slate-100 hover:cursor-pointer hover:scale-[1.02] duration-700 transition-all text-[25px] hidden small:flex hover:text-black  "
              onClick={dropDown}
            >
              <AiOutlineMenu />
            </div>
          {state ? (
              <div
                className="h-[150px] w-[200px]  top-[90px] rounded-md absolute right-3 flex flex-col justify-between text-[white] font-semibold z-100"
                style={{
                  backdropFilter: "blur( 7px )",
                  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  background: "rgba( 255, 255, 255, 0.25 )",
                }}
              >
                <div className="p-1 hover:bg-slate-300 hover:cursor-pointer duration-300 transition-all hover:text-black ">
                  Home
                </div>
                <div className="p-1 hover:bg-slate-300 hover:cursor-pointer duration-300 transition-all hover:text-black ">
                Launch a campaign
                </div>
                <div className="p-1 hover:bg-slate-300 hover:cursor-pointer duration-300 transition-all  hover:text-black">
                  Sign in
                </div>
                <div className="p-1 hover:bg-slate-300 hover:cursor-pointer duration-300 transition-all  hover:text-black">
                  Sign up
                </div>
              </div>
            ) : null}
      </div>
    </div>
  );
};

export default Header;
