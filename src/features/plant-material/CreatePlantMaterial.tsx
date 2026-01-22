import { ComponentProps } from "react"
import { View } from "react-native"
import { twMerge } from "tailwind-merge"

export const CreatePlantMaterial = () => {
  return <View className="h-full w-full">

  </View>
}

const Container = ({children, className, ...props} : ComponentProps<typeof View>) => {
  return <View className={twMerge("h-full w-full", className)} {...props}>{children}</View>
}
