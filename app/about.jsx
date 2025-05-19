import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const About = () => {
  return (
    <View>
      <Text>About Page</Text>
      <Link
        href={"/"}
        style={{ padding: 20, color: "white", backgroundColor: "black" }}
      >
        Go Home
      </Link>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
