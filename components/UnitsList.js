import React from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";

const UnitsList = ({ units }) => (
  <FlatList
    data={units}
    keyExtractor={(_, index) => index.toString()}
    renderItem={({ item }) => <ListItem title={item} chevron />}
  />
);

export default UnitsList;
