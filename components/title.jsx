import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Title(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: 2,
    backgroundColor: "#50a0dd",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
