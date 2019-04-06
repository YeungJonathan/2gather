import React from "react";
import { ListItem } from "react-native-elements";

const Unit = ({ unit }) => {
  return (
    <ListItem
      leftAvatar={{
        title: name[0],
        showEditButton: false
      }}
      title={name}
      chevron
    />
  );
};

export default Unit;
