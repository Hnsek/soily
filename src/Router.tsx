import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Flag } from './features/taximeter/types/Flag';
import { PlantingList } from './features/planting/PlantingList';

export type RouteList = {
  PlantingList: undefined;
  Taximeter: undefined;
  TaximeterDetails: { flag: Flag }
}

const Stack = createNativeStackNavigator<RouteList>()

export default () => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName='PlantingList' screenOptions={{headerShown:false}}>
            <Stack.Screen name="PlantingList" component={PlantingList}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
}
