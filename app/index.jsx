import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import Logo from "../assets/adaptive-icon.png";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={{ height: 100, width: 150 }} />
      <Text style={styles.title}>The Number 1</Text>
      <Text style={{ margin: 10 }}>Reading List App</Text>
      <Link
        href={"/about"}
        style={{ padding: 20, color: "white", backgroundColor: "black" }}
      >
        About page
      </Link>
    </View>
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
    fontSize: 18,
  },
});
