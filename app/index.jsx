import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemeText";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={20}/>
      <ThemedText style={styles.title} title={true}>The Number 1</ThemedText>
      <Spacer />
      <ThemedText>Reading List App</ThemedText>
      <Spacer />
      <Link
        href={"/login"}
        style={{ padding: 20 }}
      >
        <ThemedText>Login page</ThemedText>
      </Link>
      <Link
        href={"/register"}
        style={{
          padding: 20,
          marginVertical: 10,
        }}
      >
        <ThemedText>Register page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 23,
  },
});
