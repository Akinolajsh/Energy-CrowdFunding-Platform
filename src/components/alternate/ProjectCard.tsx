import { FaCalendarDay } from "react-icons/fa";
import imgs from "../../assets/hero-one-big.jpg";
const ProjectCard = () => {
  return (
    <>
      <div className="w-[350px] m-2 h-[550px] bg-white">
        <div className="w-full relative h-[250px]">
          <div className="overflow-hidden h-full w-full">
            <img
              src={imgs}
              className="w-full object-cover transition-all duration-500 hover:scale-[1.09] h-full"
            />
          </div>
          <button className="px-6 py-2 absolute bottom-[-18px] left-10 bg-emerald-500 text-white capitalize font-semibold">
            Technology
          </button>
        </div>
        <div className="w-full p-7 ">
          <div className="w-full flex items-center">
            <img
              src={imgs}
              className="object-cover h-[50px] mr-3 w-[50px] rounded-full bg-rose-600"
            />
            <span className="font-bold text-slate-500">person's name</span>
          </div>
          <p className="w-full my-3 font-bold text-[#001D23] text-[18px]">
            Fundraising for the people and the cause you care about
          </p>
          <div className="flex items-center">
            <FaCalendarDay className="text-emerald-500 mr-3 text-[25px]" />
            <span className="text-[#001D23] font-bold">25, February, 2023</span>
          </div>
          <div className="w-full text-[#001d23] my-3">
            Goal: <span className="text-emerald-500">₦5, 000.00</span>
          </div>
          <button className="w-full h-[50px] bg-emerald-500 transition-all duration-500 text-white text-[18px] font-bold hover:bg-[#001d23]">
            Invest us
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
