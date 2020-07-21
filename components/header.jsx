import React from "react";
import { StatusBar, Text, StyleSheet, View } from "react-native";

export default function Header(props) {
  return (
    <>
      <View style={styles.statusBar}></View>
      <View style={styles.container}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    backgroundColor: "#0366d6",
    width: "100%",
    alignItems: "center",
  },

  text: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  statusBar: {
    paddingTop: StatusBar.currentHeight + 5,
    backgroundColor: "#6256c3",
  },
});
