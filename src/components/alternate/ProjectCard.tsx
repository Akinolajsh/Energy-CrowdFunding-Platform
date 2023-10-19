import { FaCalendarDay } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import moment from "moment";
import PersonProfile from "./PersonProfile";

interface iProps {
  props: any
}

const ProjectCard:React.FC<iProps> = ({props}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[350px]  m-2 min-h-[550px] bg-white" onClick={() => {
navigate("/")
      }}>
        <div className="w-full relative h-[250px]">
          <div className="overflow-hidden h-full w-full">
            <img
              src={props?.image}
              className="w-full object-cover transition-all duration-500 hover:scale-[1.09] h-full"
            />
          </div>
          <button className="px-6 py-2 absolute bottom-[-18px] left-10 bg-emerald-500 text-white capitalize font-semibold">
            {props?.category}
          </button>
        </div>
        <div className="w-full p-7 ">
         <PersonProfile />
          <p className="w-full cursor-default hover:text-emerald-500 transition-all duration-500 my-3 font-bold text-[#001D23] text-[18px]">
           {props?.title}
          </p>
          <div className="flex items-center">
            <FaCalendarDay className="text-emerald-500 mr-3 text-[25px]" />
            <span className="text-[#001D23] font-bold">{moment(props.createdAt).format("LLL")}</span>
          </div>
          <div className="w-full text-[#001d23] text-[12px] my-3">
            Goal: <span className="text-emerald-500">₦{props?.amountNeeded}.00</span> / Raised: <span className="text-rose-500">₦{props?.amountRaised
}.00</span> 
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
