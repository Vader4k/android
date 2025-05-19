import { Image, StyleSheet, useColorScheme } from "react-native";

//images
import Dark from '../assets/img/logo_dark.png';
import Light from '../assets/img/logo_light.png';

const ThemedLogo = () => {
  const colorScheme = useColorScheme();
  const logoSrc = colorScheme === "dark" ? Dark : Light;

  return (
    <Image source={logoSrc} style={{ height: 150, width: 150 }} />
  );
};

export default ThemedLogo;

const styles = StyleSheet.create({});
