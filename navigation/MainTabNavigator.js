import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import Categories from "../screens/Categories";
import UserDetails from "../screens/UserDetails";
import UserDetailsDrawer from "../screens/UserDetailsDrawer";
import EventsList from "../screens/EventsList";
import EventDetails from "../screens/EventDetails";
import StarredList from "../screens/StarredList";
import Create from "../screens/Create";
import loginScreen from "../screens/loginScreen";

const Authenticated = createDrawerNavigator(
	{
		MainStack: createStackNavigator({
			loginScreen,
			Categories,
			UserDetails,
			EventsList,
			EventDetails,
			StarredList,
			Create
		})
	},
	{
		headerLayoutPreset: "left",
		contentComponent: UserDetailsDrawer
	}
	);

export default Authenticated;
