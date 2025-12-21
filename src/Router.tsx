import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Taximeter } from './features/taximeter';

const Stack = createNativeStackNavigator()

export default () => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='taximeter' component={Taximeter}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
}