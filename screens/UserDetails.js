import React from "react";
import { ScrollView, View, TouchableOpacity, FlatList } from "react-native";
import Profile from "../components/Profile";
// import Interests from "../components/Interests";
import UserDescription from "../components/UserDescription";
import { ListItem, Card } from "react-native-elements";
import appStore from "../stores/AppStore";
import InterestItem from '../components/InterestItem';

import UnitsList from "../components/UnitsList";

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
          {appStore.users[0].previous.map(item => (
            <TouchableOpacity
              key={item.id.toString()}
              onPress={() =>
                this.props.navigation.navigate(
                  "EventDetails",
                  appStore.events[item.categoryName][item.id]
                )
              }
            >
              <ListItem
                title={appStore.events[item.categoryName][item.id].title}
              />
            </TouchableOpacity>
          ))}
        </Card>
        <Card title="Units">
          <UnitsList units={appStore.users[0].units} />
        </Card>
      </ScrollView>
    );
  }
}
