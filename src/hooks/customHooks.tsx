import { useQuery } from "@tanstack/react-query";
import { viewOneAPI } from "../api/authAPI";

export const useOneUser = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => viewOneAPI(id),
  });

  return { data, isLoading };
};
