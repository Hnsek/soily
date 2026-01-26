import { ComponentProps } from "react"
import { View } from "react-native"
import { twMerge } from "tailwind-merge"

export type CardContainerProps = ComponentProps<typeof View>
export const CardContainer = ({ children, className, ...props} : CardContainerProps) => {
  return <View className={twMerge("", className)} {...props}>{children}</View>
}
