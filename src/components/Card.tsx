import { ComponentProps } from "react"
import { Text, View } from "react-native"
import { twMerge } from "tailwind-merge"

export type CardContainerProps = ComponentProps<typeof View>
export const CardContainer = ({ children, className, ...props} : CardContainerProps) => {
  return <View className={twMerge("rounded-md border w-full h-10", className)} {...props}>{children}</View>
}

type CardTextProps = ComponentProps<typeof Text>
export const CardText = ({ children, ...props} : CardTextProps) => {
  return <Text {...props}>{ children }</Text>
}
