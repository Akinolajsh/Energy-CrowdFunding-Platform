import React from "react";
import CategoryCard from "../../components/static/CategoryCard";
import { LiaStoreAltSolid } from "react-icons/lia";
import { GiWorld, GiChemicalTank } from "react-icons/gi";
import { MdOutlineSolarPower } from "react-icons/md";
import { PiGasPumpBold } from "react-icons/pi";
import { LuUtilityPole } from "react-icons/lu";

const Category = () => {
  return (
    <div className="h-[600px] w-full flex justify-center ">
      <div className="w-[95%] flex flex-col  items-center">
        <div className="flex flex-col mt-3">
          <div className="text-[#02A95C] text-[15px]">What we do</div>
          <div className="text-[25px] font-bold capitalize">
            popular categories
          </div>
        </div>
        <CategoryCard icon={<LiaStoreAltSolid/>} title="Storage" content=""/>
        <CategoryCard icon={<MdOutlineSolarPower/>} title="Solar" content=""/>
        <CategoryCard icon={<GiChemicalTank/>} title="Chemical" content="Biochemical Energy,Catalysis & Chemical Kinetics"/>
        <CategoryCard icon={<GiWorld/>} title="Geopolitical" content="Transit Routes, Exporting and Importing"/>
        <CategoryCard icon={<PiGasPumpBold/>} title="Oil and Gas" content=""/>
        <CategoryCard icon={<LuUtilityPole/>} title="Electricity" content=""/>
      </div>
    </div>
  );
};

export default Category;
