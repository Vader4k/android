
import { useEffect } from "react";
import { useUserContext } from "../../context/userContext";
import { useRouter } from "expo-router";
import { Text } from "react-native";

const GuestOnly = ({ children }) => {
  const router = useRouter();
  const { user, authChecked } = useUserContext();

  useEffect(() => {
    if (user && authChecked) {
      router.replace("/profile");
    }
  },[user, authChecked]);

  if (!authChecked || user) {
    return (
        <Text>Loading</Text>
    )
  }

  return children;
};

export default GuestOnly;
