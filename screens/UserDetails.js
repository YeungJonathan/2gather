import React from "react";
import { ScrollView } from "react-native";
import Profile from "../components/Profile";
import Interests from "../components/Interests";
import UserDescription from "../components/UserDescription";
import users from "../constants/FakeUserData";

export default class UserDetails extends React.Component {
  static navigationOptions = () => {
    return {
      header: null
    }
  }
  render() {
    return (
      <ScrollView style={{ flex: 1, height: "100%" }}>
        <Profile user={users[0]} />
        <UserDescription description={users[0].description} />
        <Interests user={users[0]} />
      </ScrollView>
    );
  }
}
