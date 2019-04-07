import React from "react";
import {
  ScrollView,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Text,
  Button
} from "react-native";
import { Icon } from "react-native-elements";
import VectorIcons from "react-native-vector-icons/AntDesign";
import CategoryItem from "../components/CategoryItem";
import appStore from "../stores/AppStore";
// import Create from '../screens/Create';

const categoriesList = [
  {
    categoryName: "Education",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"
  },
  {
    categoryName: "Sport",
    image:
      "https://images.unsplash.com/photo-1489976908522-aabacf277f49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
  },
  {
    categoryName: "Business",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    categoryName: "Health",
    image:
      "https://images.unsplash.com/photo-1489450278009-822e9be04dff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
  },
  {
    categoryName: "Tech",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    categoryName: "Arts",
    image:
      "https://images.unsplash.com/photo-1459908676235-d5f02a50184b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
  },
  {
    categoryName: "Games",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
  },
  {
    categoryName: "Social",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
  },
  {
    categoryName: "Languages",
    image:
      "https://images.unsplash.com/photo-1472173148041-00294f0814a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
  },
  {
    categoryName: "Others",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
  }
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default class Categories extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const headerLeft = (
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon
          name="bars"
          type="font-awesome"
          containerStyle={{ paddingLeft: 20 }}
        />
      </TouchableOpacity>
    );
    const headerRight = (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Icon
          name="plus"
          type="antdesign"
          containerStyle={{ paddingRight: 15 }}
        />
      </TouchableOpacity>
    );
    return {
        title: "2Gather",
        headerLeft: headerLeft,
        headerRight: headerRight
    };
  };

  render() {
    const { navigation } = this.props;
    return (

      <View style={{ flex: 1, height: "100%" }}>
        <ScrollView style={{ flex: 9 }}>
          <FlatList
            data={categoriesList}
            keyExtractor={(_, index) => index.toString()}
            renderItem={item => (
              <CategoryItem
                categoryName={item.item.categoryName}
                image={item.item.image}
                navigation={navigation}
              />
            )}
          />
          <TouchableOpacity
            onPress={() => {
              const keys = Object.keys(appStore.events),
                random1 = getRandomInt(keys.length),
                eventList = appStore.events[keys[random1]],
                random2 = getRandomInt(eventList.length),
                eventInformation = eventList[random2];
              navigation.navigate("EventDetails", eventInformation);
            }}
          >
            <ImageBackground
              source={{
                uri:
                  "https://images.unsplash.com/photo-1501003878151-d3cb87799705?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              }}
              style={{ height: 100, width: "100%" }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 24,
                  marginTop: 40,
                  marginLeft: 10,
                  textShadowOffset: { width: 2, height: 1 },
                  textShadowColor: "grey"
                }}
              >
                Feeling Lucky?
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
