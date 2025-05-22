import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

//themed component
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemeText";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Logging in...", email, password);
  };

  return (
    <ThemedView style={styles.container}>
      <Spacer />

      <ThemedText title={true} style={styles.title}>
        Login to Your Account
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
        <Text style={{ color: "#f2f2f2", textAlign: "center" }}>Login</Text>
      </ThemedButton>

      <Spacer height={100} />

      <Link href={"/register"} style={styles.link}>
        <ThemedText style={{ textAlign: "center" }}>
          Register instead
        </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default login;

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
