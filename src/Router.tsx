import { NavigationContainer } from '@react-navigation/native';
import { ListPlanting } from './features/plantings/ListPlanting';
import { CreatePlanting } from './features/plantings/CreatePlanting';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type BottomTabRouteList = {
  ListPlanting: undefined;
  CreatePlanting: undefined;
}

const BottomTab = createBottomTabNavigator<BottomTabRouteList>()

const BottomTabScreens =() => {
  return <BottomTab.Navigator initialRouteName='ListPlanting' screenOptions={{headerShown:false}}>
      <BottomTab.Screen name="ListPlanting" component={ListPlanting}></BottomTab.Screen>
    </BottomTab.Navigator>    
}

export type StackRouteList = {
  CreatePlanting: undefined;
  Tabs: undefined
}

const Stack = createNativeStackNavigator<StackRouteList>()

const StackScreens = () => {
   return <Stack.Navigator initialRouteName='Tabs' screenOptions={{headerShown: false}}>
      <Stack.Screen name='Tabs' component={BottomTabScreens}></Stack.Screen>
      <Stack.Screen name='CreatePlanting' component={CreatePlanting}></Stack.Screen>
    </Stack.Navigator>
}

export default () => {
  return <NavigationContainer>
    <StackScreens/>
  </NavigationContainer>
}
