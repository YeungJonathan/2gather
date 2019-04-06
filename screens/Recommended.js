import React from "react";
import { ScrollView, Text, FlatList } from "react-native";
import appStore from "../stores/AppStore";
import { observer } from "mobx-react";
import EventCard from "../components/EventCard";

import { toJS } from "mobx";

@observer
class Recommended extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Recommendation: Education"
    };
  };
  render() {
    const { navigation } = this.props;
    const history = appStore.users[0].previous;

    historyCategories = history.map(item => item.categoryName);
    historyItems = history.map(item => item.id);

    let educationFilter = appStore.events["education"].filter(
      event => event.id != 6
    );
    const recommend = {};
    recommend["education"] = educationFilter;

    return (
      <ScrollView>
        <FlatList
          data={[].concat.apply([], recommend["education"])}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <EventCard
              navigation={navigation}
              eventInformation={item}
              categoryName={"education"}
            />
          )}
        />
      </ScrollView>
    );
  }
}
export default Recommended;
