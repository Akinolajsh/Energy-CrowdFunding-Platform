import { useOneUser } from "../../hooks/customHooks";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const state = useSelector((state: any) => state.user);
  const { data, isLoading } = useOneUser(state);
  return (
    <div>
      {isLoading ? (
        <div>...Loading</div>
      ) : (
        <div>
          <div>
            <div>{data?.email}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
