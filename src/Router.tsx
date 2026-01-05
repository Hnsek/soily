import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TaximeterScreen } from './features/taximeter/TaximeterScreen';
import { TaximeterDetails } from './features/taximeter/TaximeterDetails';
const Stack = createNativeStackNavigator()

export default () => {
    return <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Taximeter' component={TaximeterScreen}></Stack.Screen>
            <Stack.Screen name='TaximeterDetails' component={TaximeterDetails}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
}
