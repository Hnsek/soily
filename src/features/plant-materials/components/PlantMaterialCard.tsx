import { ComponentProps } from "react"
import { View } from "react-native"
import { twMerge } from "tailwind-merge"

type PlantMaterialCardProps = {
  name:string,
  quantity:number
} & ComponentProps<typeof View>
export const PlantMaterialCard = ({children, className, ...props} : PlantMaterialCardProps) => {
  return <View className={twMerge("", className)} {...props}>{ children }</View>
}
