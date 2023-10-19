import { BiRightArrowAlt } from "react-icons/bi";
import hero from "../../assets/EcoFunds.webp";
import { Link } from "react-router-dom";

const Hero2 = () => {
  return (
    <div className="w-full h-[400px] flex justify-center items-center ">
      <div className="mt-2 w-[90%] h-[90%] flex flex-col items-start  ">
        <div className="text-[28px] mt-5 font-bold text-left leading-[30px]">
          We help surface innovations in Energy
        </div>
        <Link
          to="/login"
          className="py-2 px-4 bg-green-300 my-3 rounded-[30px] font-medium"
        >
          Get Started x
        </Link>
        <div className="flex justify-center items-center h-[280px] rounded-md w-[280px] object-cover overflow-hidden mt-4">
          <img src={hero} className="object-cover " />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
