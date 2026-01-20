import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListPlanting } from './features/planting/ListPlanting';

export type RouteList = {
  ListPlanting: undefined;
}

const Stack = createNativeStackNavigator<RouteList>()

export default () => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName='ListPlanting' screenOptions={{headerShown:false}}>
            <Stack.Screen name="ListPlanting" component={ListPlanting}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
}
