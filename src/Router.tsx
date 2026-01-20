import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PlantingList } from './features/planting/ListPlanting';

export type RouteList = {
  PlantingList: undefined;
}

const Stack = createNativeStackNavigator<RouteList>()

export default () => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName='PlantingList' screenOptions={{headerShown:false}}>
            <Stack.Screen name="PlantingList" component={PlantingList}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
}
