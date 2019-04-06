import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import Categories from "../screens/Categories";
import UserDetails from "../screens/UserDetails";
import UserDetailsDrawer from "../screens/UserDetailsDrawer";

const Authenticated = createDrawerNavigator(
  {
    Categories: createStackNavigator({ Categories }),
    UserDetails: createStackNavigator({ UserDetails }),
    Events: createStackNavigator({ EventsList })
  },
  {
    headerLayoutPreset: "left",
    contentComponent: UserDetailsDrawer
  }
);

export default Authenticated;
