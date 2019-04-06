import React from "react";
import { Text, Image, View } from "react-native";
import {
  Card,
  ListItem,
} from "react-native-elements";

const Profile = ({ user }) => (
  <View>
    <Image
      source={{
        uri:
          "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      }}
      style={{ width: "100%", height: 200 }}
    />
    <ListItem
      leftAvatar={{
        title: user.name[0],
        showEditButton: true
      }}
      title={user.name}
      subtitle={user.role}
    />

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
  </View>
);

export default Profile;