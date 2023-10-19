import { useQuery } from "@tanstack/react-query";
import { viewOneAPI } from "../api/authAPI";
import { getCampaign } from "../api/CampaignAPI";
import { profileAPI, profileAPIGet } from "../api/ProfileAPI";

export const useOneUser = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => viewOneAPI(id),
  });

  return { data, isLoading };
};

export const useProjects = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["useProjects"],
    queryFn: getCampaign,
  });

  return { data, isLoading };
};

export const useProfile = (userID:string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["useProfile"],
    queryFn: () => profileAPIGet(userID),
  });
  return { data, isLoading };
};
