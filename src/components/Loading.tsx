import { ComponentPropsWithRef } from "react"
import { View } from "react-native"
import { twMerge } from "tailwind-merge"


type LoadingProps =  {

} & ComponentPropsWithRef<typeof View>

export const Loading = ({ children, className, ...props } : LoadingProps) => {
  return <View className={twMerge(className, "w-full h-full")}  {...props}>
    { children }
  </View>

}
