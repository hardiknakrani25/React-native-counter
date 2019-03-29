import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./Home/home";
import Dashbord from "./Home/dashbord";

const AppNavigator = createStackNavigator(
  {
    Home,
    Dashbord
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
