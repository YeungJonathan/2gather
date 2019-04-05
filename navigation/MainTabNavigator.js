import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';

const Authenticated = createStackNavigator({
    Home: HomeScreen
})

export default Authenticated;