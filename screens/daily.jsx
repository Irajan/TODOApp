import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Title from "../components/title";
import List from "../components/list";

const data = {
  remaining: ["Watch dogs", "Cook Lunch", "Play Piano", "Learn programming"],
  completed: ["Finalize Projects", "Drink Water", "Read notice", "Dance out"],
};

export default function DailyScreen() {
  return (
    <View style={styles.container}>
      <Title value="Remaining . . ." />
      <List items={data.remaining} />
      <Title value="Completed . . ." />
      <List items={data.completed} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "aqua",
    marginTop: 5,
    marginHorizontal: 5,
  },
});
