import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function List(prams) {
  const items = prams.items;

  return (
    <>
      {items.map((element) => (
        <Text key={Math.random()}>{element}</Text>
      ))}
    </>
  );
}
