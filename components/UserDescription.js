import React from "react";
import { Card } from "react-native-elements";
import { Text } from "react-native";
import Profile from "./Profile";

const UserDescription = ({ description }) => {
  return (
    <>
      <Card title="Description">
        <Text>{description}</Text>
      </Card>
    </>
  );
};
export default UserDescription;
