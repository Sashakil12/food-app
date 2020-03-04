import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Search from "./src/screens/search";
import RestaurantShowScreen from "./src/screens/RestaurantShow";

const navigator = createStackNavigator(
  {
    Search: Search,
    Restaurant: RestaurantShowScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search"
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default createAppContainer(navigator);
