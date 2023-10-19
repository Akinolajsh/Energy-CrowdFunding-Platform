import React from 'react'
import imgs from "../../assets/hero-one-big.jpg";
import { useOneUser, useProfile } from '../../hooks/customHooks';
import { useDispatch, useSelector } from 'react-redux';
import { onNewToggleState } from '../../global/globalState';

const PersonProfile = () => {
    const user = useSelector((state:any) => state.user)
    const toggle = useSelector((state: any) => state.newToggle);
    const {data} = useProfile(user)
    const dispatch= useDispatch()

    const onChangeState = () => {
        dispatch(onNewToggleState(!toggle));
      };
      

  return (
    <div>
         <div className="w-full flex items-center cursor-pointer" 
         onClick={onChangeState}
         >
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