import React, { Component } from "react";
// import { Text, View } from "react-native";
// import { ListItem } from "react-native-elements";
import { View, Text, Image } from "react-native";
import {
  Card,
  ThemeProvider,
  ListItem,
  Button,
  Icon
} from "react-native-elements";
import Interests from "./Interests";

export default class Profile extends Component {
  render() {
    const users = [
      {
        name: "Zain",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
        role: "Developer",
        interests: [
          { name: "java", proficiency: 2 },
          { name: "python", proficiency: 3 },
          { name: "mobile development", proficiency: 3 }
        ]
      }
    ];
    return (
      <>
        <Image
          source={{
            uri:
              "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          }}
          style={{ width: "100%", height: 200 }}
        />
        <ListItem
          leftAvatar={{
            title: users[0].name[0],
            showEditButton: true
          }}
          title={users[0].name}
          subtitle={users[0].role}
        />
        <Interests user={users[0]} />

        <Card title="Description">
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Text>
        </Card>
      </>
    );
  }
}
// function Avatar(props) {
//   return (
//
//   );
// }
