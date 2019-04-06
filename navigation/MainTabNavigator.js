import { createStackNavigator } from 'react-navigation';
import Categories from '../screens/Categories';
import EventsList from '../screens/EventsList';
import Create from "../screens/Create";


const Authenticated = createStackNavigator(
    {
        Create:{screen:Create},
    Categories: {screen: Categories},
    Events: {screen:EventsList},
        // Create:{screen:Create},
    }, 
    {
        headerLayoutPreset: 'left'
    }
);

export default Authenticated;