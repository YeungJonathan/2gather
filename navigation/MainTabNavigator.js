import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import Categories from "../screens/Categories";
import UserDetails from "../screens/UserDetails";
import UserDetailsDrawer from "../screens/UserDetailsDrawer";
import EventsList from "../screens/EventsList";
import EventDetails from "../screens/EventDetails";
import StarredList from "../screens/StarredList";

const Authenticated = createDrawerNavigator(
  {
    MainStack: createStackNavigator({
      Categories,
      UserDetails,
      EventsList,
      EventDetails,
      StarredList
    })
  },
  {
    headerLayoutPreset: "left",
    contentComponent: UserDetailsDrawer
  }
);

export default Authenticated;
