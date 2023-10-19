import { Link } from "react-router-dom";
import img1 from "../../assets/hero-one-big.jpg";

const DashboardHeader = () => {
  return (
    <>
      <div className="flex text-white w-full relative h-[100px]">
        <img src={img1} className="object-cover w-full absolute h-full" />
        <div className="absolute justify-between z-40 bg-opacity-10 shadow-md p-3 flex items-center backdrop-blur-3xl w-full h-full">
          <p className="text-[40px]  tablet:text-[30px]">Person's Name Dashboard</p>
          <div className="flex items-center ml-5">
            <span className="cursor-pointer hover:scale-[1.09] mx-5">
              <Link to={`/profile`}>Profile</Link>
            </span>
            <span className="cursor-pointer hover:scale-[1.09] mx-5">
              <Link to={`/profile/settings`}>Settings</Link>
            </span>
            <span className="cursor-pointer hover:scale-[1.09] mx-5">
              <Link to={`/profile/projects`}>Projects</Link>
            </span>
            <span className="cursor-pointer hover:scale-[1.09] mx-5">
              <Link to={`/profile/launch`}>Compaign</Link>
            </span>
          </div>
          <button
            type="submit"
            className="px-10 py-3 border-white border-[1px] rounded hover:scale-[1.09] transition-all duration-300"
          >
            logOut
          </button>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
