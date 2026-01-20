import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TaximeterScreen } from './features/taximeter/TaximeterScreen';
import { TaximeterDetails } from './features/taximeter/TaximeterDetails';
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
            <Stack.Screen name='Taximeter' component={TaximeterScreen}></Stack.Screen>
            <Stack.Screen name='TaximeterDetails' component={TaximeterDetails}></Stack.Screen>
            <Stack.Screen name="PlantingList" component={PlantingList}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
}
