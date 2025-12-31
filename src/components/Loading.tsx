import { ComponentPropsWithRef } from "react"
import { View } from "react-native"
import { twMerge } from "tailwind-merge"
import {LoaderCircle} from "lucide-react-native"

type LoadingProps =  {

} & ComponentPropsWithRef<typeof View>

export const Loading = ({ className, ...props } : LoadingProps) => {
  return <View className={twMerge(className, "w-full h-full flex items-center justify-center")}  {...props}>
    <View className="animate-spin">
      <LoaderCircle width={50} height={50}/>
    </View>
  </View>

}
