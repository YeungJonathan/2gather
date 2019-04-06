import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import Profile from "../components/Profile";
import appStore from "../stores/AppStore";
import { Divider, ListItem, Icon } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ListItem: {
    // paddingTop: -20,
  }
});

const UserDetailsDrawer = ({ navigation }) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <Profile
        user={appStore.users[0]}
        onPress={() => navigation.navigate("UserDetails")}
      />
      <Divider style={{ backgroundColor: "grey", height: 1 }} />
      <View style={styles.ListItem}>
        <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
          <ListItem
            title="Home"
            subtitle=""
            leftAvatar={
              <Icon reverse name="home" type="font-awesome" size={15} />
            }
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Recommended")}>
          <ListItem
            title="Recommended"
            subtitle=""
            leftAvatar={
              <Icon reverse name="thumbs-up" type="font-awesome" size={15} />
            }
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("StarredList")}>
          <ListItem
            title="Starred"
            subtitle=""
            leftAvatar={
              <Icon reverse name="star" type="font-awesome" size={15} />
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Terms and Conditions")}
        >
          <ListItem
            title="Terms and Condition"
            subtitle=""
            leftAvatar={
              <Icon reverse name="copyright" type="font-awesome" size={15} />
            }
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <ListItem
            title="Logout"
            titleStyle={{color:'red'}}
            subtitle=""
            leftAvatar={
              <Icon reverse name="sign-out" type="font-awesome" size={15} color='red'/>
            }
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </ScrollView>
);

export default UserDetailsDrawer;
