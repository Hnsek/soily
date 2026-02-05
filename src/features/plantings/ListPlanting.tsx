import { SafeAreaView } from "react-native-safe-area-context"
import { BottomTabRouteList } from "../../Router"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { PlantingList } from "./components/PlantingList";
import { PlantingTitle } from "./components/PlantingTitle";

type Props = BottomTabScreenProps<BottomTabRouteList,"ListPlanting">;
export const ListPlanting = ({navigation} : Props) => {
  return <SafeAreaView className="h-screen w-screen bg-background p-4">
    <PlantingTitle>Plantações</PlantingTitle>    
    <PlantingList/>
  </SafeAreaView>
}
