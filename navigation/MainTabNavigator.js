import { createStackNavigator } from 'react-navigation';
import Categories from '../screens/Categories';
import EventsList from '../screens/EventsList';
import EventDetails from '../screens/EventDetails';

const Authenticated = createStackNavigator(
    {
    Categories: {screen: Categories},
    Events: {screen:EventsList},
    EventDetails: {screen:EventDetails}
    }, 
    {
        headerLayoutPreset: 'left'
    }
);

export default Authenticated;