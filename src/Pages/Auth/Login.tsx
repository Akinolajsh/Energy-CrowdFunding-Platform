import React from 'react'
import {AiOutlineMail} from "react-icons/ai"
import {PiEyeClosed,PiEyeLight} from "react-icons/pi"
import {BsGoogle} from "react-icons/bs"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-[100vh] w-full bg-[#0D2A45] flex justify-center small:h-[600px]'>

        {/* main */}
       <div className='h-[550px] small:h-[500px] w-[500px]  small:w-[310px] border mt-10 flex flex-col  items-center bg-white p-10'>

        {/* title */}
        <div className='flex flex-col justify-center items-center '>
            <div className='font-bold text-[30px] small:text-[20px]'>Company Name</div>
            <div className='text-[20px] small:text-[15px]'>Login Into Your Account</div>
        </div>

    {/* input */}

   <div className=' flex flex-col w-full'>
   <div className='h-[40px] w-full flex  justify-center items-center border-b-2 border-[#cecbcb] mt-4'>
        <input  placeholder='Email Address' className='h-[100%] w-[100%] outline-none border-none flex 
        '/>
        <div className='text-[25px] text-[#cecbcb]'><AiOutlineMail/></div>
    </div>
        <div className='text-[13px] text-red-400 flex justify-end mt-1'>Email Required!!</div>
   </div>

{/* password */}

   <div className=' flex flex-col w-full'>
   <div className='h-[40px] w-full flex  justify-center items-center border-b-2 border-[#cecbcb] mt-4'>
        <input  placeholder='Password' className='h-[100%] w-[100%] outline-none border-none flex 
        '/>
        <div className='text-[25px] text-[#cecbcb]'><PiEyeClosed/></div>
    </div>
        <div className='text-[13px] text-red-400 flex justify-end mt-1'>Password Required!!</div>
   </div>

   {/* forgetPasword */}

   <div className='mt-4 flex justify-end w-full'>
   <Link to="/reset-password">
   Forgot your password?
   </Link>
   </div>

   {/* button */}

<button className='bg-[#7FD096] h-[50px] w-full mt-5 text-white text-[20px] rounded-md'>
    Login
</button>

{/* social */}

<div className='mt-3 flex  justify-between items-center  w-full '>
    <hr className='w-[90px] small:w-[35px]'/>
   <div className=' text-[15px] small:text-[10px]' > Or Login with google  </div>   <div className='bg-[#DB4437]  rounded-[50%] text-white flex justify-center small:h-[30px] h-[40px] w-[40px] items-center small:w-[30px]'><BsGoogle/></div>
    <hr className='w-[90px] small:w-[35px]'/>
</div>

<div className='flex mt-5 small:text-[10px] text-[14px] justify-center items-center'>
    <div className='mx-2 '>Don't have an account?</div>
    <Link to="/register" className='hover:text-[#7FD096] hover:duration-500 hover:transition-all hover:underline font-bold'>
    Register here
    </Link>
</div>
        </div> 
    </div>
  )
}

export default Login