import { AiTwotoneCamera } from "react-icons/ai";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const Profile = () => {
  const [avatar, setAvatar] = useState<string>("");
  const [image, setImage] = useState();

  const schema = yup.object({
    name: yup.string().required(),
    address: yup.string().required(),
    phoneNumber: yup.string().required(),
    aboutUs: yup.string().required(),
  });

  const onHandleImage = (e: any) => {
    try {
      const file = e.target.files[0];
      const realImage: any = URL.createObjectURL(file);
      setImage(realImage);
      setAvatar(file);
    } catch (error) {
      console.log(error);
    }
  };

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data: any) => {
    const { address, phoneNumber, aboutUs, name } = data;
    const formData = new FormData();

    formData.append("name", name);
    formData.append("address", address);
    formData.append("phoneNumber", phoneNumber);
    formData.append("aboutUs", aboutUs);
    formData.append("avatar", avatar);

    reset();
  });

  const validateInput = (e: any) => {
    const input = e.target;
    const inputValue = input.value;

    input.value = inputValue.replace(/\D/g, "");
  };

  return (
    <div className="w-full h-[100vh] flex p-[10px] justify-center ">
      <form
        className="w-[400px] min-h-[50px] shadow-lg p-2"
        onSubmit={onSubmit}
      >
        <div className="text-[17px] font-semibold rounded-md text-center mb-3">
          My Information
        </div>
        <div className="flex flex-col items-center relative mb-[80px]">
          <img
            src={image}
            alt=""
            className="w-[80px] h-[80px] rounded-full border object-cover absolute"
          />
          <input
            type="file"
            className="hidden"
            id="pix"
            onChange={onHandleImage}
          />
          <label
            htmlFor="pix"
            className="hover:cursor-pointer duration-300 transition-all absolute text-[17px] top-[60px]"
          >
            <AiTwotoneCamera />
          </label>
        </div>

        <div className="mb-2">
          <div className="text-[14px] font-semibold mb-1">fullName</div>
          <input
            type="text"
            placeholder="enter full name"
            className="w-full h-[40px] rounded-md pl-[5px] outline-none border border-black placeholder:text-[13px]"
            {...register("name")}
          />
          {errors.name && (
            <div className="text-[10px] text-red-600 flex justify-end">
              please input this field
            </div>
          )}
        </div>

        <div className="mb-2">
          <div className="text-[14px] font-semibold mb-1">phoneNumber</div>
          <input
            type="text"
            placeholder="+234 374 3743 274"
            className="w-full h-[40px] rounded-md pl-[5px] outline-none border border-black placeholder:text-[13px]"
            onInput={validateInput}
            maxLength={11}
            {...register("phoneNumber")}
          />
          {errors.phoneNumber && (
            <div className="text-[10px] text-red-600 flex justify-end">
              please input this field
            </div>
          )}
        </div>

        <div className="mb-2">
          <div className="text-[14px] font-semibold mb-1">address</div>
          <input
            type="text"
            placeholder="enter office address"
            className="w-full h-[40px] rounded-md pl-[5px] outline-none border border-black placeholder:text-[13px]"
            {...register("address")}
          />
          {errors.address && (
            <div className="text-[10px] text-red-600 flex justify-end">
              please input this field
            </div>
          )}
        </div>

        <div className="mb-2">
          <div className="text-[14px] font-semibold mb-1">aboutUs</div>
          <textarea
            placeholder="write a short description"
            className="w-full h-[50px] rounded-md pl-[5px] outline-none border border-black placeholder:text-[13px] resize-none"
            {...register("aboutUs")}
          />
          {errors.aboutUs && (
            <div className="text-[10px] text-red-600 flex justify-end">
              please input this field
            </div>
          )}
        </div>

        <button
          className=" mt-1 w-full h-[40px] rounded-md hover:cursor-pointer duration-300 transition-all bg-black text-white mb-[10px]"
          type="submit"
        >
          save
        </button>
      </form>
    </div>
  );
};

export default Profile;
