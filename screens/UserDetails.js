import React from "react";
import { ScrollView } from "react-native";
import Profile from "../components/Profile";
import Interests from "../components/Interests";
import users from '../constants/FakeUserData';

export default class UserDetails extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, height: "100%" }}>
        <Profile user={users[0]}/>
        <Interests user={users[0]} />
      </ScrollView>
    );
  }
}
