import { createStackNavigator } from 'react-navigation';
import Categories from '../screens/Categories';
import EventsList from '../screens/EventsList'

const Authenticated = createStackNavigator(
    {
    Categories: {screen: Categories},
    Events: {screen:EventsList}
    }, 
    {
        headerLayoutPreset: 'left'
    }
);

export default Authenticated;