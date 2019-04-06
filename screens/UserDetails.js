import React from "react";
import { View } from "react-native";
import Profile from "../components/Profile";

export default class UserDetails extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, height: "100%" }}>
        <Profile />
      </View>
    );
  }
}
