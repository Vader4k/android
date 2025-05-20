import { StyleSheet } from "react-native";

import Spacer from "../../components/Spacer";
import ThemeText from "../../components/ThemeText";
import ThemedView from "../../components/ThemedView";

const create = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemeText title={true} style={styles.heading}>
        Add a New Book
      </ThemeText>
      <Spacer />
    </ThemedView>
  );
};

export default create;

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
