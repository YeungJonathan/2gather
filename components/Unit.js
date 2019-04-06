import React from "react";
import { ListItem } from "react-native-elements";

const Unit = ({ unit }) => {
  return (
    <ListItem
      leftAvatar={{
        title: name[0],
        source: { uri: avatar_url },
        showEditButton: false
      }}
      title={unit.title}
      chevron
    />
  );
};

export default Unit;
