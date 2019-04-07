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
      title: "Recommendation: Tech"
    };
  };
  render() {
    const { navigation } = this.props;
    const history = appStore.users[0].previous;

    historyCategories = history.map(item => item.categoryName);
    historyItems = history.map(item => item.id);

    let educationFilter = appStore.events["tech"].filter(
      event => event.id != 3
    );
    const recommend = {};
    recommend["tech"] = educationFilter;

    return (
      <ScrollView>
        <FlatList
          data={[].concat.apply([], recommend["tech"])}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <EventCard
              navigation={navigation}
              eventInformation={item}
              categoryName={"tech"}
            />
          )}
        />
      </ScrollView>
    );
  }
}
export default Recommended;
