import React from 'react'
import imgs from "../../assets/hero-one-big.jpg";
import { useOneUser, useProfile } from '../../hooks/customHooks';
import { useSelector } from 'react-redux';

const PersonProfile = () => {
    const user = useSelector((state:any) => state.user)
    const {data} = useProfile(user)

  return (
    <div>
         <div className="w-full flex items-center">
            <img
              src={data?.avatar}
              className="object-cover h-[50px] mr-3 w-[50px] rounded-full bg-rose-600"
            />
            <span className="font-bold text-slate-500">{data?.name}</span>
          </div>
    </div>
  )
}

export default PersonProfile