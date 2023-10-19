import { useDispatch, useSelector } from "react-redux";
import { onToggleState } from "../../global/globalState";
import { AiOutlineClose } from "react-icons/ai";

const PopOutScreen = () => {
  const toggle = useSelector((state: any) => state.toggle);
  const dispatch = useDispatch();
  const onChangeToggle = () => {
    dispatch(onToggleState(!toggle));
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "rgba( 0, 0, 0, 0.15 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 30px )",
      }}
      className="fixed w-full z-10 h-[100vh] top-0 left-0 flex flex-col"
    >
      <div className="w-[350px] min-h-[200px] bg-white">
        <AiOutlineClose onClick={onChangeToggle} />
      </div>
    </div>
  );
};

export default PopOutScreen;
