import React from "react";
import {
  ScrollView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList
} from "react-native";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import Profile from "../components/Profile";
import UserDescription from "../components/UserDescription";
import { ListItem, Card, Overlay } from "react-native-elements";
import appStore from "../stores/AppStore";
import InterestItem from "../components/InterestItem";
import UnitsList from "../components/UnitsList";

@observer
export default class UserDetails extends React.Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  constructor() {
    super();
    this.state = {
      overlayVisible: false,
      addingUnitCode: ""
    };
  }

  render() {
    const interests = appStore.users[0].interests,
      { overlayVisible, addingUnitCode } = this.state;
    return (
      <ScrollView style={{ flex: 1, height: "100%" }}>
        <Profile user={appStore.users[0]} disabled />
        <UserDescription description={appStore.users[0].description} />
        <Card title="Interests">
          <FlatList
            data={interests}
            keyExtractor={(item, index) => index.toString()}
            renderItem={item => <InterestItem interest={item.item} />}
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
          <TouchableOpacity
            onPress={() => this.setState({ overlayVisible: true })}
            style={{
              justifyContent: "center",
              alignSelf: "center",
              paddingBottom: 15
            }}
          >
            <Text>Add a unit</Text>
          </TouchableOpacity>
          <UnitsList units={toJS(appStore.users[0].units)} />
        </Card>
        <Overlay isVisible={overlayVisible} height={75}>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Enter your unit code here"
              value={addingUnitCode}
              onChangeText={text => this.setState({ addingUnitCode: text })}
              autoCapitalize="characters"
            />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around"
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.setState({ overlayVisible: false, addingUnitCode: "" });
                }}
              >
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (addingUnitCode !== "")
                    appStore.users[0].units.push(addingUnitCode);
                  this.setState({ overlayVisible: false, addingUnitCode: "" });
                }}
              >
                <Text>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Overlay>
      </ScrollView>
    );
  }
}
