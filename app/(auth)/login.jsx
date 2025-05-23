import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import { useUserContext } from "../../context/userContext";
import { Colors } from "../../constants/colors";

//themed component
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemeText";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { login } = useUserContext();

  const handleSubmit = async () => {
    setError(null);
    try {
      await login(email, password);
    } catch (error) {
      setError(error.message);
    }
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

      {error && <ThemedText style={styles.error}>{error}</ThemedText>}
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
    paddingHorizontal: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    marginBottom: 30,
  },
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: "#f5c1c8",
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
  },
});
