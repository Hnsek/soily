import { ComponentProps } from "react"
import { View } from "react-native"
import { twMerge } from "tailwind-merge"

export type CardProps = ComponentProps<typeof View>
export const Card = ({ children, className, ...props} : CardProps) => {
  return <View className={twMerge("rounded-md border w-full", className)} {...props}>{children}</View>
}

export type CardContainerProps = ComponentProps<typeof View>
export const CardContainer = ({ children, className, ...props} : CardContainerProps) => {
  return <View className={twMerge("flex flex-row justify-around items-center py-4", className)} {...props}>{children}</View>
}
