import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from "../screens/LoginScreen";
import Authenticated from './MainTabNavigator';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Login: LoginScreen,
  Main: Authenticated,
}));