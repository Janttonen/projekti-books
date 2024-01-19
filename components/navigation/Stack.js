import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen.js'
import SecondScreen from '../pages/SecondScreen.js'

const Stack = createStackNavigator();

export default function App() {
return (

<Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Secondpage" component={SecondScreen} />
</Stack.Navigator>

);
}