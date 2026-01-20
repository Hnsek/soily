import { NavigationContainer } from '@react-navigation/native';
import { ListPlanting } from './features/plantings/ListPlanting';
import { CreatePlanting } from './features/plantings/CreatePlanting';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type BottomTabRouteList = {
  ListPlanting: undefined;
  CreatePlanting: undefined;
}

const BottomTab = createBottomTabNavigator<BottomTabRouteList>()

export default () => {
  return <NavigationContainer>
    <BottomTab.Navigator initialRouteName='ListPlanting' screenOptions={{headerShown:false}}>
      <BottomTab.Screen name="ListPlanting" component={ListPlanting}></BottomTab.Screen>
      <BottomTab.Screen name="CreatePlanting" component={CreatePlanting} options={{ tabBarStyle:{display: "none"} }}></BottomTab.Screen>
    </BottomTab.Navigator>    
  </NavigationContainer>
}
