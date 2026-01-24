import { ComponentProps } from "react";
import { Text as TextRoot} from "react-native"
import { twMerge } from "tailwind-merge";

export type TextProps = ComponentProps<typeof TextRoot>

export const Text = ({children, className, ...props} : TextProps) => {
  return <TextRoot className={twMerge("text-xl text-white", className)} {...props}>{children}</TextRoot>
}
