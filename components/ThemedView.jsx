import {  SafeAreaView, View, useColorScheme } from "react-native";
import { Colors } from "../constants/colors";


const ThemedView = ({ style, safe = false,  ...props}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    safe ? (
      <SafeAreaView style={[style, { backgroundColor: theme.background }]} {...props}/>
    ) : (
      <View style={[style, { backgroundColor: theme.background }]} {...props}/>
    )
  );
};

export default ThemedView;


