import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemeText";

const contact = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>contact Page</ThemedText>
      <Link href={"/"} style={styles.link}>
        <ThemedText>Go Home</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    marginVertical:10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  }
});