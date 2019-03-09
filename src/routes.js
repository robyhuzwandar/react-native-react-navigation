import {createStackNavigator,createAppContainer} from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import ManajemenScreen from './screens/ManajemenScreen';

const AppStackNavigator = createStackNavigator({
    Home: HomeScreen,
    Manajemen: ManajemenScreen
})

const AppContainer = createAppContainer(AppStackNavigator);
export default AppContainer