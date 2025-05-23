import { StyleSheet, Text } from "react-native";

import Spacer from "../../components/Spacer";
import ThemeText from "../../components/ThemeText";
import ThemedView from "../../components/ThemedView";
import ThemedButton from "../../components/ThemedButton";
import { useUserContext } from "../../context/userContext";

const profile = () => {

  const { logout, user } = useUserContext()

  return (
    <ThemedView style={styles.container}>
      <ThemeText title={true} style={styles.heading}>
        {user?.email}
      </ThemeText>
      <Spacer />
      <ThemeText>
        Time to start reading some books...
      </ThemeText>

      <ThemedButton onPress={logout}>
        <Text style={{ color: "#f2f2f2", textAlign: "center" }}>
          Logout
        </Text>
      </ThemedButton>
      <Spacer />
    </ThemedView>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
});
