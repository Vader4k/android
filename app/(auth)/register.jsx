import { StyleSheet, Pressable, Text } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemeText";
import Spacer from "../../components/Spacer";
import { Colors } from "../../constants/colors";

const Register = () => {

  const handleSubmit = () => {
    console.log("Registering...");
  };

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Register for an Account
      </ThemedText>
      <Pressable onPress={handleSubmit} style={({pressed}) => [styles.btn, pressed && styles.pressed]}>
        <Text style={{color: '#f2f2f2', textAlign: 'center'}}>Login</Text>
      </Pressable>
      <Spacer height={100} />
      <Link href={"/login"} style={styles.link}>
        <ThemedText style={{ textAlign: "center" }}>
          Login instead
        </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.8,
  },
});
