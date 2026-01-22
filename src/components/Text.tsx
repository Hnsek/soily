import { ComponentProps } from "react"
import { Text as TextRoot } from "react-native"

export const Text = ({children, ...props} : ComponentProps<typeof TextRoot>) => {
  return <Text {...props}>{children}</Text>
}
