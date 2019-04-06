import React from "react";
import { FlatList, TouchableOpacity, Linking } from "react-native";
import { ListItem } from "react-native-elements";

const UnitsList = ({ units }) => (
  <FlatList
    data={units}
    keyExtractor={(_, index) => index.toString()}
    renderItem={({ item }) => (
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            "http://www.monash.edu.au/pubs/handbooks/units/" + item + ".html"
          )
        }
      >
        <ListItem title={item} chevron />
      </TouchableOpacity>
    )}
  />
);

export default UnitsList;
