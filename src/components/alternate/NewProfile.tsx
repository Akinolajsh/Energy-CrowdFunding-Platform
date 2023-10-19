import { FaCamera } from "react-icons/fa";
import imags from "../../assets/hero-one-small-2.jpg";

const NewProfile = () => {
  return (
    <>
      <div className="w-full h-full flex pt-3 justify-center items-center">
        <form className="w-[500px] flex flex-col items-center py-5 px-5 shadow-2xl h-[570px] border">
          <div className="text-[#001d23] font-bold text-[30px]">
            Your Information
          </div>
          <div className="relative w-[250px]">
            <img
              className="h-[250px] w-[250px] rounded-full border-[#001d23] object-cover border-[2px]"
              src={imags}
            />
            <input id="image" type="file" className="hidden" />
            <label
              htmlFor="image"
              className="w-[50px] h-[50px] bg-emerald-500 right-5 bottom-5 cursor-pointer flex items-center justify-center text-white absolute rounded-full"
            >
              <FaCamera className="" />
            </label>
          </div>
          <div className="w-full my-3 flex justify-between">
            <div className="w-[48%]">
              <p className="capitalize">userName</p>
              <input
                type="text"
                placeholder="enter your name"
                className="w-full pl-2 border h-[40px]"
              />
              <span className="text-rose-400 text-[13px]">error</span>
            </div>
            <div className="w-[48%]">
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
            <span className="text-rose-400 flex w-full justify-center text-[13px]">error</span>
          </div>
          <button className="capitalize w-full py-3 bg-emerald-500 text-white font-bold hover:bg-[#001d23] transition-all duration-500">
            create profile
          </button>
        </form>
      </div>
    </>
  );
};

export default NewProfile;
