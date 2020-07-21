import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Header from "./components/header";
import DailyScreen from "./screens/daily";
import WeeklyScreen from "./screens/weekly";
import MonthlyScreen from "./screens/monthly";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <>
      <Header title="TODOs List" />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Daily" component={DailyScreen} />
          <Tab.Screen name="Weekly" component={WeeklyScreen} />
          <Tab.Screen name="Monthly" component={MonthlyScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
