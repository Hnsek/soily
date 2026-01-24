import { ComponentProps } from "react";
import { TextInput as TextInputRoot } from "react-native"
import { twMerge } from "tailwind-merge";
import CurrencyInput from "react-native-currency-input"

type TextInputProps = ComponentProps<typeof TextInputRoot>

export const TextInput = ({ children, className, ...props } : TextInputProps) => {
  return <TextInputRoot className={twMerge("h-16 w-full border rounded-md text-xl p-3", className)} {...props}>{children}</TextInputRoot> 
  
}

type NumericInputProps = ComponentProps<typeof CurrencyInput>

export const NumericInput = ({ children, className, ...props } : NumericInputProps) => {
  return <CurrencyInput
    className={twMerge("h-16 w-full border rounded-md text-xl p-3", className)} {...props}>{children}</CurrencyInput> 
}
