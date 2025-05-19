import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { Colors } from "../constants/colors";


const ThemedView = ({ style, ...props}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View style={[style, { backgroundColor: theme.background }]} {...props}/>
  );
};

export default ThemedView;

const styles = StyleSheet.create({});
