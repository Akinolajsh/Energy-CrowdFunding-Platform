import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const Resetpassword = () => {
  return (
    <div className="h-[100vh] w-full bg-[#0D2A45] flex justify-center small:h-[600px]">
      {/* main */}
      <div className="h-[350px] small:h-[350px] w-[500px]  small:w-[310px] border mt-10 flex flex-col  items-center bg-white p-10">
        {/* title */}
        <div className="flex flex-col justify-center items-center ">
          <div className="font-bold text-[30px] small:text-[20px]">
            Company Name
          </div>
          <div className="text-[20px] small:text-[15px]">
            Reset Your Password
          </div>
        </div>

        {/* input */}

        <div className=" flex flex-col w-full">
          <div className="h-[40px] w-full flex  justify-center items-center border-b-2 border-[#cecbcb] mt-4">
            <input
              placeholder="Email Address"
              className="h-[100%] w-[100%] outline-none border-none flex 
        "
            />
            <div className="text-[25px] text-[#cecbcb]">
              <AiOutlineMail />
            </div>
          </div>
          <div className="text-[13px] text-red-400 flex justify-end mt-1">
            Email Required!!
          </div>
        </div>

        {/* button */}

        <button className="bg-[#7FD096] h-[50px] w-full mt-5 text-white text-[20px] rounded-md">
          Reset Password
        </button>

        <div className="flex mt-5 small:text-[10px] text-[14px] justify-center items-center">
          <div className="mx-2 ">Remember password?</div>
          <Link
            to="/login"
            className="hover:text-[#7FD096] hover:duration-500 hover:transition-all hover:underline font-bold"
          >
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resetpassword;
