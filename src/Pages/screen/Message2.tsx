import { HiLightBulb } from "react-icons/hi"

const MessagePage = () => {
  return (
    <div className="flex justify-center items-center w-full h-[100vh] flex-col bg-green-100">
       <span className="flex items-center text-white font-bold  w-full justify-center mb-[60px]">
            <HiLightBulb className="text-[80px] tablet:text-[50px]" />
            <span className="text-[60px] tablet:text-[40px]">
              eco<span className="text-emerald-500">Funds</span>
            </span>
          </span>
        <div className="text-[60px]  medium:text-[20px]">You're almost done</div>
       <div className="text-[20px] ">
       Click <a href="https://mail.google.com" className="text-emerald-600 text-[20px]  medium:text-[20px]">here</a> to get password reset link
       </div>
    </div>
  )
}

export default MessagePage