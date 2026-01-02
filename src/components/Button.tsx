import { ComponentProps } from "react";
import { Pressable } from "react-native";
import { twMerge } from "tailwind-merge";

export type ButtonProps = ComponentProps<typeof Pressable>

export const Button = ({children, className, ...props} : ButtonProps) => {
  return <Pressable className={twMerge("bg-primary p-5 border rounded-md flex justify-center items-center flex-row active:opacity-60", className)} {...props}>{children}</Pressable>
}
