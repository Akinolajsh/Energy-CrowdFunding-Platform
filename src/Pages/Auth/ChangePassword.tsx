import { AiOutlineKey } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordAPI, resetPasswordAPI } from "../../api/authAPI";
import Swal from "sweetalert2";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [parent] = useAutoAnimate();
  const { token }: any = useParams();
  const schema = yup.object({
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit(async (data: any) => {
    changePasswordAPI(token, data).then((res: any) => {
      if (res) {
        Swal.fire({
          icon: "success",
          text: "Go to your gmail",
          showCancelButton: false,
          timer: 3000,
          timerProgressBar: true,
        }).then(() => {
          navigate("/login");
        });
      } else {
        Swal.fire({
          icon: "error",
          text: "An error occured",
          showCancelButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      }
    });
  });

  return (
    <div className="h-[100vh] w-full bg-emerald-500 flex justify-center ">
      <form
        onSubmit={onHandleSubmit}
        className="h-[320px] rounded-md text-slate-400 w-[500px] border mt-10 flex flex-col  items-center bg-white p-10"
      >
        <div className="flex flex-col justify-center items-center ">
          <div className="font-bold text-[25px] capitalize">
            Change password
          </div>
          <div className="text-[13px] text-center">
            Update your password for added security. Choose a strong, unique
            password to protect your account. Your safety is important to us.
          </div>
        </div>
        <div className=" flex flex-col w-full">
          <div className="h-[40px] w-full flex  justify-center items-center border-b-2 border-[#cecbcb] mt-4">
            <input
              placeholder="enter new password"
              type="password"
              {...register("password")}
              className="h-[100%] w-[100%] outline-none border-none flex 
        "
            />
            <div className="text-[25px] text-[#cecbcb]">
              <AiOutlineKey />
            </div>
          </div>
          <div
            ref={parent}
            className="text-[13px] text-red-400 flex justify-end mt-1"
          >
            {errors.password?.message}
          </div>
        </div>

        {/* button */}

        <button
          type="submit"
          className="bg-[#7FD096] h-[50px] w-full mt-5 text-white text-[20px] rounded-md"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
