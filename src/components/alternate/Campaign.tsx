import dummy from "../../assets/dummy-image.jpg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createCampaign } from "../../api/CampaignAPI";
import Swal from "sweetalert2";

const Campaign = () => {
  const navigate = useNavigate();

  const [avatar, setAvatar] = useState<string>("");
  const [image, setImage] = useState<any>();

  const handleImage = (e: any) => {
    const file = e.target.files[0];
    const saveImage = URL.createObjectURL(file);
    setAvatar(saveImage);
    setImage(file);
  };

  const model = yup.object({
    title: yup.string().required(),
    amountNeeded: yup.number().required(),
    motivation: yup.string().required(),
    description: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(model),
  });

  const onHandleSubmit = handleSubmit(async (data: any) => {
    const { title, amountNeeded, motivation, description } = data;

    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("motivation", motivation);
    formdata.append("amountNeeded", amountNeeded);
    formdata.append("description", description);
    formdata.append("image", image);

    console.log("first", formdata);

    // createCampaign(data).then((res) => {
    //   if (res) {
    //     Swal.fire({
    //       title: "Campaign Succesfully Created😊",
    //       showClass: {
    //         popup: "animate_animated animate_fadeInDown",
    //       },
    //       hideClass: {
    //         popup: "animate_animated animate_fadeOutUp",
    //       },
    //     });
    //     navigate("/");
    //   } else {
    //     navigate("/profile/launch");
    //     Swal.fire({
    //       title: "Error occured while creating campaign 😢😢",
    //       showClass: {
    //         popup: "animate_animated animate_fadeInDown",
    //       },
    //       icon: "error",
    //       hideClass: {
    //         popup: "animate_animated animate_fadeOutUp",
    //       },
    //     });
    //   }
    // });
  });

  return (
    <div className="h-full w-full flex justify-between  p-5 smallTab:flex-col">
      <div className="w-[45%] h-[550px] smallTab:h-[320px] flex flex-col smallTab:w-full ">
        <div
          className="h-[400px] smallTab:h-[250px] w-full border overflow-hidden flex justify-center items-center"
          style={{
            boxShadow: "0px 0px 10px 0px rgba(237,230,230,0.75)",
            WebkitBoxShadow: "0px 0px 10px 0px rgba(237,230,230,0.75)",
          }}
        >
          <label htmlFor="image" className="h-full border overflow-hidden">
            <input
              type="file"
              id="image"
              className="hidden"
              onChange={handleImage}
            />
            <img src={dummy} className="object-cover w-full h-full" />
          </label>
        </div>

        <select className="mt-5 border w-full h-[40px] outline-none rounded-md">
          <option value="">Select Category</option>
          <option value="Solar Energy">Solar Energy</option>
          <option value="Geothermal Energy">Geothermal Energy</option>
          <option value="Wind Energy">Wind Energy</option>
          <option value="Biomass Energy">Biomass Energy</option>
          <option value="Hydroelectric Power">Hydroelectric Power</option>
          <option value="Hydropower">Hydropower</option>
        </select>
      </div>
      <form
        className="h-[550px] w-[48%] border p-3  smallTab:w-full"
        style={{
          boxShadow: "0px 0px 10px 0px rgba(237,230,230,0.75)",
          WebkitBoxShadow: "0px 0px 10px 0px rgba(237,230,230,0.75)",
        }}
        onSubmit={onHandleSubmit}
      >
        <div className="h-[60px] w-full flex justify-center items-center border rounded-md p-2 my-2">
          <textarea
            className="h-full w-full resize-none outline-none border-none"
            placeholder="Title"
            required
            {...register("title")}
          />
        </div>
        <div className="h-[60px] w-full flex justify-center items-center border rounded-md p-2 my-2">
          <input
            className="h-full w-full resize-none outline-none border-none"
            placeholder="₦ 1000.00"
            required
            {...register("amountNeeded")}
          />
        </div>
        <div className="h-[120px] w-full flex justify-center items-center border rounded-md p-2 my-2">
          <textarea
            className="h-full w-full resize-none outline-none border-none"
            placeholder="Motivation"
            required
            {...register("motivation")}
          />
        </div>
        <div className="h-[200px] w-full flex justify-center items-center border rounded-md p-2 my-2">
          <textarea
            className="h-full w-full resize-none outline-none border-none"
            placeholder="Description"
            required
            {...register("description")}
          />
        </div>
        <div className="w-fullborder flex justify-end pr-3 items-center pt-1">
          <button
            className="py-2 px-5 bg-[green] rounded-md text-white"
            type="submit"
          >
            Launch
          </button>
        </div>
      </form>
    </div>
  );
};

export default Campaign;

// box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
// -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
// -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
