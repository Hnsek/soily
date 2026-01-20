import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListPlanting } from './features/plantings/ListPlanting';
import { CreatePlanting } from './features/plantings/CreatePlanting';

export type RouteList = {
  ListPlanting: undefined;
  CreatePlanting: undefined;
}

const Stack = createNativeStackNavigator<RouteList>()

export default () => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName='ListPlanting' screenOptions={{headerShown:false}}>
            <Stack.Screen name="ListPlanting" component={ListPlanting}></Stack.Screen>
            <Stack.Screen name="CreatePlanting" component={CreatePlanting}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
}
