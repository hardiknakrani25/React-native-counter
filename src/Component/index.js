import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./Home/home";

const AppNavigator = createStackNavigator(
  {
    Home
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
