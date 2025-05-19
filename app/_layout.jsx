import { Slot, Stack } from "expo-router";
import { StyleSheet, Text, useColorScheme, View } from "react-native";

const RootLayout = () => {
  const colorScheme = useColorScheme();

  console.log(colorScheme);

  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "gray",
          headerTitleStyle: { fontWeight: "bold" },
        }}>
          <Stack.Screen name="index" options={{ headerShown: false, title: "Home" }} />
          {/* <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="register" options={{ headerShown: false }} />
          <Stack.Screen name="home" options={{ headerShown: false }} />
          <Stack.Screen name="profile" options={{ headerShown: false }} />
          <Stack.Screen name="settings" options={{ headerShown: false }} /> */}
        </Stack>
      <Text>footer</Text>
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
