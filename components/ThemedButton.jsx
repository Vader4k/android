import { StyleSheet, Pressable } from "react-native";
import { Colors } from "../constants/colors";

const ThemedButton = ({ style, ...props }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
      {...props}
    />
  );
};

export default ThemedButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
    maxWidth: '80%',
    width: '100%',
    alignSelf: 'center',
  },
  pressed: {
    opacity: 0.8,
  },
});
