import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemeText";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";
import { useState } from "react";
import { useUserContext } from "../../context/userContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useUserContext();

  const handleSubmit = async () => {
    try {
      await register(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title={true} style={styles.title}>
          Register for an Account
        </ThemedText>
        <ThemedTextInput
          placeholder="Email"
          style={{ width: "80%", marginBottom: 20, marginHorizontal: "auto" }}
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />

        <ThemedTextInput
          placeholder="Password"
          style={{ width: "80%", marginBottom: 20, marginHorizontal: "auto" }}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: "#f2f2f2", textAlign: "center" }}>
            Register
          </Text>
        </ThemedButton>
        <Spacer height={100} />
        <Link href={"/login"} style={styles.link}>
          <ThemedText style={{ textAlign: "center" }}>Login instead</ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
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
    fontSize: 24,
    marginBottom: 30,
  },
});
