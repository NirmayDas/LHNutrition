import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from './screens/home-screen';
import Tracking from './screens/Tracking';
import Summary from './screens/Summary';
import About from "./screens/About";


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" 
                      component={HomeScreen} 
                      options={{headerShown: false}}/>

        <Stack.Screen name = "Tracking" 
                      component={Tracking}
                      options={{headerShown: false}} />

        <Stack.Screen name = "Summary" 
                      component={Summary}
                      options={{headerShown: false}} />
        <Stack.Screen name = "About" 
                      component={About}
                      options={{headerShown: false}} />

      </Stack.Navigator> 
    </NavigationContainer>
  );
}
