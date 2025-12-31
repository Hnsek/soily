import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TaximeterScreen } from './features/taximeter/TaximeterScreen';
const Stack = createNativeStackNavigator()

export default () => {
    return <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='taximeter' component={TaximeterScreen}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
}
