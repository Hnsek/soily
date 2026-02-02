import { ReactNode } from "react"
import { View } from "react-native"
import { Text } from "../../../components/Text"

type PlantingMaterialTitleProps = {
  children?: ReactNode
}
export const PlantingMaterialTitle = ({ children } : PlantingMaterialTitleProps) =>{
  return <View className="w-full py-6">
    <Text className="text-black text-2xl font-bold">{ children }</Text>
  </View>
}
