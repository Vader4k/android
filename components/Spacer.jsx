import { View, StyleSheet, Text } from "react-native";

const Spacer = ({width = "100%", height = 10}) => {
  return (
    <View style={{ width, height }} />
  );
};

export default Spacer;

const styles = StyleSheet.create({});
