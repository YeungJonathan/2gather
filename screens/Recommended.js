import React from "react";
import { View, Text } from "react-native";
import appStore from "../stores/AppStore";
import { TouchableOpacity } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { observer } from "mobx-react";

@observer
class Recommended extends React.Component {
  static navigationOptions = ({ navigation }) => {};
  render() {
    const { navigation } = this.props;
    const history = appStore.users[0].previous;

    historyCategories = history.map(item => item.categoryName);
    historyItems = history.map(item => item.id);

    // console.log(console.log(history));
    // educationFilter = appStore.events["education"].filter(event =>
    //   event.id !== 6 ? event.title : event.title
    // );
    // console.log("educationFilter", educationFilter);
    // let allEvents = history.map(key => console.log(key));
    historyCategories.map((category, index) => {
      appStore.events.category.forEach((item, index) => {
        item.id == 6 ? item.title : null;
      });
    });
    const recommend = {};
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    );
  }
}
export default Recommended;
