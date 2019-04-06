import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { observer } from "mobx-react";
import EventCard from "../components/EventCard";
import Icon from "react-native-vector-icons/FontAwesome";
import appStore from "../stores/AppStore";

@observer
class EventsList extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const headerRight = (
      <TouchableOpacity style={{ paddingRight: 20 }}>
        <Icon size={18} name="search" />
      </TouchableOpacity>
    );
    return {
      title: "Events",
      headerRight: headerRight
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      heading: "Events"
    };
  }

<<<<<<< HEAD
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, height: "100%" }}>
        <FlatList
          data={appStore.events}
          keyExtractor={item => item.id.toString()}
          renderItem={eventInformation => (
            <EventCard
              navigation={navigation}
              eventInformation={eventInformation.item}
            />
          )}
        />
      </View>
    );
  }
=======
    render() {
        const { navigation } = this.props,
            categoryName = navigation.getParam('categoryName').toLowerCase();
        return (
            <View style={{flex:1, height:'100%'}}>
                <FlatList
                    data={appStore.events[categoryName]}
                    keyExtractor={item => item.id.toString()}
                    renderItem={eventInformation => (
                        <EventCard
                            navigation={navigation}
                            eventInformation={eventInformation.item}
                            categoryName={categoryName}
                        />
                    )}
                />
            </View>
        );
    }
>>>>>>> 08aa9febf2729685f22ec7c44f873594a74bd991
}

export default EventsList;
