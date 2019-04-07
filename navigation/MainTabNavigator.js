import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import Categories from "../screens/Categories";
import UserDetails from "../screens/UserDetails";
import UserDetailsDrawer from "../screens/UserDetailsDrawer";
import EventsList from "../screens/EventsList";
import EventDetails from "../screens/EventDetails";
import Recommended from "../screens/Recommended";
import StarredList from "../screens/StarredList";
import Create from "../screens/Create";
import LoginScreen from "../screens/LoginScreen";

const Authenticated = createDrawerNavigator(
	{
		MainStack: createStackNavigator({
			LoginScreen,
			Categories,
			UserDetails,
			EventsList,
			EventDetails,
			StarredList,
			Create,
      Recommended
		})
	},
	{
		headerLayoutPreset: "left",
		contentComponent: UserDetailsDrawer
	}
);

export default Authenticated;
