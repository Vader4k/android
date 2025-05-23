import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import GuestOnly from "../../components/auth/GuestOnly";

const RootLayout = () => {
  return (
    <GuestOnly>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      />
    </GuestOnly>
  );
};

export default RootLayout;
