import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import {
  ListItem,
} from "react-native-elements";

const Profile = ({ user, onPress=()=>{null}, disabled }) => (
  <View>
    <Image
      source={{
        uri:
          "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      }}
      style={{ width: "100%", height: 200 }}
    />
    <TouchableOpacity
      disabled={disabled}
      onPress={() => onPress()}
    >
      <ListItem
        leftAvatar={{
          title: user.name[0],
          showEditButton: true
        }}
        title={user.name}
        subtitle={user.role}
        chevron={!disabled}
      />
    </TouchableOpacity>
  </View>
);

export default Profile;
