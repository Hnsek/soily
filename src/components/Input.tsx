import { ComponentProps } from "react";
import { TextInput as TextInputRoot } from "react-native"

type TextInputProps = ComponentProps<typeof TextInputRoot>

export const TextInput = ({ children, ...props } : TextInputProps) => {
  return <TextInput {...props}>{children}</TextInput> 
}
