import { useEffect } from "react";
import { useUserContext } from "../../context/userContext";
import { useRouter } from "expo-router";
import ThemedLoader from "../ThemedLoader";

const UserOnly = ({ children }) => {
  const router = useRouter();
  const { user, authChecked } = useUserContext();

  useEffect(() => {
    if (!user && authChecked) {
      router.replace("/login");
    }
  },[user, authChecked]);

  if (!authChecked || !user) {
    return (
        <ThemedLoader />
    )
  }

  return children;
};

export default UserOnly;
