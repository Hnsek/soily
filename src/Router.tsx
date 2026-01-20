import { NavigationContainer } from '@react-navigation/native';
import { ListPlanting } from './features/plantings/ListPlanting';
import { CreatePlanting } from './features/plantings/CreatePlanting';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type RouteList = {
  ListPlanting: undefined;
  CreatePlanting: undefined;
}

const BottomTab = createBottomTabNavigator<RouteList>()

export default () => {
  return <NavigationContainer>
    <BottomTab.Navigator initialRouteName='ListPlanting' screenOptions={{headerShown:false}}>
      <BottomTab.Screen name="ListPlanting" component={ListPlanting}></BottomTab.Screen>
      <BottomTab.Screen name="CreatePlanting" component={CreatePlanting}></BottomTab.Screen>
    </BottomTab.Navigator>    
  </NavigationContainer>
}
