import React from "react";
import { ScrollView, View, TouchableOpacity, FlatList } from "react-native";
import Profile from "../components/Profile";
// import Interests from "../components/Interests";
import UserDescription from "../components/UserDescription";
import { ListItem, Card } from "react-native-elements";
import appStore from "../stores/AppStore";
import InterestItem from '../components/InterestItem';


export default class UserDetails extends React.Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  };
  render() {
    const interests = appStore.users[0].interests;
    return (
      <ScrollView style={{ flex: 1, height: "100%" }}>
        <Profile user={appStore.users[0]} disabled />
        <UserDescription description={appStore.users[0].description} />
        <Card title="Interests">
          <FlatList
              data={interests}
              keyExtractor = {(item, index) => index.toString()}
              renderItem={item => 
                  <InterestItem
                      interest={item.item}                            
                  />
                  }
            />
        </Card>
        <Card title="History">
          {appStore.users[0].previous.map(eventId => (
            <TouchableOpacity
              key={eventId.toString()}
              onPress={() =>
                this.props.navigation.navigate(
                  "EventDetails",
                  appStore.events[eventId - 1]
                )
              }
            >
              <ListItem title={appStore.events[eventId - 1].title} />
            </TouchableOpacity>
          ))}
        </Card>
      </ScrollView>
    );
  }
}
