import { useColorScheme, Text } from "react-native";
import { Colors } from "../constants/colors";

const ThemeText = ({ style, title = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const textStyle = title ? { color: theme.title } : { color: theme.text };
  return <Text style={[textStyle, style]} {...props} />;
};

export default ThemeText;
