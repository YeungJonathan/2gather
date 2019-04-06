import React, { Component } from "react";
// import { Text, View } from "react-native";
// import { ListItem } from "react-native-elements";
import { View, Text, Image } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

export default class Profile extends Component {
  render() {
    const users = [
      {
        name: "Zain",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
        role: "Developer"
      }
    ];
    return (
      <Card title="Profile">
        <ListItem
          leftAvatar={{
            title: users[0].name[0],
            showEditButton: true
          }}
          title={users[0].name}
          subtitle={users[0].role}
          chevron
        />
      </Card>
    );
  }
}
// function Avatar(props) {
//   return (
//
//   );
// }
