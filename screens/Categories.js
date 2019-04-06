import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import CategoryItem from "../components/CategoryItem";

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
    return {
      title: "Categories",
      headerLeft: headerLeft
    };
  };

  render() {
    return (
      <View style={{ flex: 1, height: "100%" }}>
        <View style={{ flex: 9 }}>
          <FlatList
            data={categoriesList}
            keyExtractor={(_, index) => index.toString()}
            renderItem={item => (
              <CategoryItem
                categoryName={item.item.categoryName}
                image={item.item.image}
                navigation={this.props.navigation}
              />
            )}
          />
        </View>
      </View>
    );
  }
}
