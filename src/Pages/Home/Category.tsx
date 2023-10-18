import React from "react";
import CategoryCard from "../../components/static/CategoryCard";
import { LiaStoreAltSolid } from "react-icons/lia";
import { GiWorld, GiChemicalTank } from "react-icons/gi";
import { MdOutlineSolarPower } from "react-icons/md";
import { PiGasPumpBold } from "react-icons/pi";
import { LuUtilityPole } from "react-icons/lu";

const Category = () => {
  return (
    <div className="h-[600px] w-full flex justify-center bg-slate-50">
      <div className="w-[90%] h-[100%] flex flex-col  items-center flex-wrap">
        <div className=" flex-col mt-3  small:flex justify-center items-center ">
          <div className="text-[#02A95C] small:text-[15px] text-[35px] flex justify-center items-center">What we do</div>
          <div className="small:text-[25px] font-bold capitalize text-[35px]">
            popular categories
          </div>
        </div>
        <div className="flex flex-wrap h-[400px] w-full  justify-center items-center">
          <CategoryCard
            icon={<LiaStoreAltSolid />}
            title="Storage"
            content="Hydrogen Energy Storage, Mechanical & Battery"
          />
          <CategoryCard
            icon={<MdOutlineSolarPower />}
            title="Solar"
            content="Solar Thermal & Concentrated Solar Power"
          />
          <CategoryCard
            icon={<GiChemicalTank />}
            title="Chemical"
            content="Biochemical,Catalysis & Chemical Kinetics"
          />
          <CategoryCard
            icon={<GiWorld />}
            title="Geopolitical"
            content="Transit Routes, Exporting and Importing"
          />
          <CategoryCard
            icon={<PiGasPumpBold />}
            title="Oil and Gas"
            content="Transition Fuel,Refining & Processing"
          />
          <CategoryCard
            icon={<LuUtilityPole />}
            title="Electricity"
            content="Electricity Efficiency & Conservation"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
