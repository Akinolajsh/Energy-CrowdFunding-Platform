const CheckOutPage = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center h-[100vh] bg-[#001d23]">
        <div className="w-[500px] py-5 px-3 rounded-md min-h-[500px] bg-white">
          <p className="text-[20px] font-bold text-[#001d23]">Check-Out</p>
          <div className="w-full my-2">
            <p className="capitalize text-[13px]">donate funds</p>
            <div className="flex font-bold text-[30px] border-t-[1px] items-center border-b-[1px]">
              <span>₦</span>
              <input
                type="number"
                className="h-[100%] w-[85%] pl-[20px] outline-none text-[30px] text-right appearance-none focus:border-indigo-500"
              />
              <div className="font-bold">
                <span className="mb-[10px]"> .</span>00
              </div>
            </div>
            <div className="w-full my-5">
              <p className="capitalize text-[13px]">email address</p>
              <input
                type="email"
                className="w-full h-[50px] outline-none pl-2 border"
                placeholder="@gmail.com"
              />
            </div>
            <div className="w-full my-5">
              <p className="capitalize mb-2 text-[13px]">
                you are paying with PayStack
              </p>
              <div className="w-full h-[50px] items-center flex justify-between border-b-[1px] border-t-[1px]">
                <div>
                  <input
                    type="radio"
                    className="outline-none mr-3 pl-2 border"
                    placeholder="@gmail.com"
                  />
                  <span className="text-[#001d23] font-bold">PayStack</span>
                </div>
              </div>
              <div className="border-t-[1px] h-[50px] justify-between items-center capitalize text-[#001d23] font-bold flex my-4 w-full">
                <span>your donation</span>
                <div className="flex justify-end font-bold text-[20px] ">
                  ₦.00
                </div>
              </div>
              <button className="hover:bg-[#001d23] transition-all duration-300 bg-emerald-500 text-white font-bold w-full h-[50px]">
                Pay in with PayStack
              </button>
              <span className="text-slate-500 text-[13px] text-center flex justify-center mt-3">
                Your commitment to environmental conservation is truly
                commendable, and we are immensely thankful for your invaluable
                support. Together, we can make a significant impact on our
                world.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutPage;
