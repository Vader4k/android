import { StyleSheet } from "react-native";

import Spacer from "../../components/Spacer";
import ThemeText from "../../components/ThemeText";
import ThemedView from "../../components/ThemedView";

const profile = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemeText title={true} style={styles.heading}>
        Your Email
      </ThemeText>
      <Spacer />
      <ThemeText>
        Time to start reading some books...
      </ThemeText>
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
