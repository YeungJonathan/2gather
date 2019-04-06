import { createStackNavigator } from 'react-navigation';
import Categories from '../screens/Categories';
// import Launch from '../screens/Launch';

const Authenticated = createStackNavigator(
    {
    Categories: {screen: Categories},
    }, 
    {
        headerLayoutPreset: 'left'
    }
);

export default Authenticated;