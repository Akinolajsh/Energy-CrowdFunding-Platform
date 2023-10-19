import React from "react";
import layer from "../../assets/EcoFunds.webp";

const Hero = () => {
  return (
    <div className="   medium:h-[500px]  h-[550px] w-full bg-slate-100 flex justify-center items-center ">
      <div className="medium:w-[90%] w-[85%]  h-[500px]  justify-center flex  medium:h-[90%] ">
        <div className=" w-[50%]  ">
          <div className="medium:text-[40px] text-[60px] font-bold leading-[70px] mt-11 medium:leading-[50px] medium:mt-[60px]  ">
            We help surface innovations in Energy
          </div>
          <div className="border-l-2 border-[green] mt-9 h-[50px] flex  items-center p-2 w-[330px] ">
            The fude is changing the way people and companies work.
          </div>
        </div>
        <div className="medium:h-[300px] medium:mt-10  h-[500px] w-[650px] object-cover ">
          <img src={layer} className="object-cover h-full w-full rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
