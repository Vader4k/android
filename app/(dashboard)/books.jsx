import { StyleSheet } from "react-native";

import Spacer from "../../components/Spacer";
import ThemeText from "../../components/ThemeText";
import ThemedView from "../../components/ThemedView";

const books = () => {
  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemeText  title={true} style={styles.heading}>
        Your Reading List
      </ThemeText>
      <Spacer />
    </ThemedView>
  );
};

export default books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
});
