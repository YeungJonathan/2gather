import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import EventsList from '../screens/EventsList';

const Authenticated = createStackNavigator({
    // Home: HomeScreen,
    Events: EventsList
})

export default Authenticated;