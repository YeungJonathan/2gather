import React from "react";
import { ScrollView, View } from "react-native";
import Profile from "../components/Profile";
import Interests from "../components/Interests";
import UserDescription from "../components/UserDescription";
import { ListItem, Card, TouchableOpacity } from "react-native-elements";
import appStore from "../stores/AppStore";

export default class UserDetails extends React.Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  };
  render() {
    return (
      <ScrollView style={{ flex: 1, height: "100%" }}>
        <Profile user={appStore.users[0]} disabled />
        <UserDescription description={appStore.users[0].description} />
        <Interests user={appStore.users[0]} />
        <Card title="History">
          {appStore.users[0].previous.map(eventId => (
            <ListItem
              onPress={() =>
                this.props.navigation.navigate(
                  "EventDetails",
                  appStore.events[eventId - 1]
                )
              }
              key={eventId}
              title={appStore.events[eventId - 1].title}
            />
          ))}
        </Card>
      </ScrollView>
    );
  }
}
