import React from "react";
import { ScrollView } from "react-native";
import Profile from "../components/Profile";

export default class UserDetails extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, height: "100%" }}>
        <Profile />
      </ScrollView>
    );
  }
}
