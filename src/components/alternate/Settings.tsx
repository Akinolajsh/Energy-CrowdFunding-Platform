import { FaCamera } from "react-icons/fa";
import imags from "../../assets/hero-one-small-2.jpg";

const Settings = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <form className="w-[500px] flex flex-col mt-20 items-center py-5 px-5 shadow-2xl h-[570px] border">
          <div className="text-[#001d23] font-bold text-[30px]">
            Update Your Data
          </div>
          <div className="w-full my-3 flex justify-between">
            <div className="w-full">
              <p className="capitalize">phone number</p>
              <input
                type="text"
                placeholder="telephone"
                className="w-full pl-2 border h-[40px]"
              />
              <span className="text-rose-400 flex w-full justify-end text-[13px]">
                error
              </span>
            </div>
          </div>
          <div className="w-full my-2">
            <input
              type="text"
              placeholder="enter your address"
              className="w-full pl-2 border h-[40px]"
            />
            <span className="text-rose-400 flex w-full justify-end text-[13px]">
              error
            </span>
          </div>
          <button className="capitalize w-full py-3 bg-emerald-500 text-white font-bold hover:bg-[#001d23] transition-all duration-500">
            update profile
          </button>
        </form>
      </div>
    </>
  );
};

export default Settings;
