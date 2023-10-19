import pix from "../../assets/react.svg";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineClose,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { onNewToggleState } from "../../global/globalState";

const DetailedScreen = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state: any) => state.newToggle);
  const onChangeState = () => {
    dispatch(onNewToggleState(!toggle));
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: "rgba( 255, 255, 255, 0.15 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 4px )",
          //   border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
        className="fixed w-full h-[100vh]  z-50 top-0 left-0 flex items-center justify-center flex-col"
      >
        <div className="w-[90%] h-[100vh] bg-white relative flex justify-center items-center">
          <div onClick={onChangeState} className="absolute top-0 right-0 h-[50px] flex justify-center hover:text-white transition-all duration-500 items-center cursor-pointer rounded-l-full hover:bg-[#001d23] bg-emerald-500 text-[30px] w-[50px]">
            <AiOutlineClose />
          </div>
          <div className="w-[85%] flex justify-between">
            <div className="w-[48%] h-full ">
              <div className="w-full h-[350px]">
                <img src={pix} alt="" className="w-full border h-full" />
              </div>
              <div className="  mt-[50px]">
                <div className="my-[10px] text-[25px] font-bold">
                  Short Story
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus facilis, quo est autem, at officiis et facere
                  laborum expedita veritatis dolor non id possimus unde?
                </div>
              </div>
              <div className="flex items-center my-5">
                <div className="mr-3">Share:</div>
                <div className="flex w-[100px] justify-between text-[20px]">
                  <BsFacebook />
                  <AiOutlineTwitter />
                  <AiOutlineInstagram />
                  <AiFillLinkedin />
                </div>
              </div>
            </div>
            <div className=" w-[48%] h-full">
              <button className="px-6 py-2 bg-emerald-500 text-white capitalize font-semibold">
                Technology
              </button>
              <div className="text-[30px] font-bold my-[20px]">
                Original Shinecon VR Pro Virtual Reality 3D Glasses
              </div>
              <div className="flex items-center ">
                <div className="w-[60px] h-[60px] border rounded-[50%] mr-5"></div>
                <div>
                  <div className="mb-1">By Listing Agent</div>
                  <div>9 Campaigns | 2 Loved campaigns</div>
                </div>
              </div>
              <div className="  my-[25px]">
                <div className="my-[10px] text-[25px] font-bold">
                  Motivation
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus facilis, quo est autem, at officiis et facere
                  laborum expedita veritatis dolor non id possimus unde?
                </div>
              </div>
              <div className="flex justify-between w-[470px] my-[30px] ">
                <div className="w-[140px] h-[100px] border flex justify-center items-center flex-col">
                  <div className="mb-1 font-bold text-[25px]">$6,400</div>
                  <div>pledged</div>
                </div>
                <div className="w-[140px] h-[100px] border flex justify-center items-center flex-col">
                  <div className="mb-1 font-bold text-[25px]">$6,400</div>
                  <div>pledged</div>
                </div>
                <div className="w-[140px] h-[100px] border flex justify-center items-center flex-col">
                  <div className="mb-1 font-bold text-[25px]">$6,400</div>
                  <div>pledged</div>
                </div>
              </div>
              <div className="w-[200px] h-[50px] bg-green-500 flex justify-center shadow-md items-center">
                Back Campaign
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedScreen;
