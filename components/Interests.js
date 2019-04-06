import React from "react";
import { Card, ListItem } from "react-native-elements";

const Interests = ({ user }) => (
  <Card title="Interests">
    {user.interests.map(interest => (
      <ListItem
        key={interest.name}
        title={interest.name}
        subtitle={interest.proficiency.toString()}
        leftAvatar={null}
      />
    ))}
  </Card>
);

export default Interests;
