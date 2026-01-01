import { GestureHandlerRootView} from "react-native-gesture-handler"
import BottomSheetRoot, { BottomSheetView as BottomSheetViewRoot} from "@gorhom/bottom-sheet"
import { ComponentProps, ReactNode } from "react"
import { View } from "react-native"

type BottomSheetProps = {
  className?:string
  children?: ReactNode
} & ComponentProps<typeof BottomSheetRoot>

export const BottomSheet = ({children, className, ...bottomSheetProps} : BottomSheetProps) => {
  return <View className={className}>
     <GestureHandlerRootView>
        <BottomSheetRoot {...bottomSheetProps}>
          {children}
        </BottomSheetRoot>
     </GestureHandlerRootView> 
  </View>
}

type BottomSheetViewProps = ComponentProps<typeof BottomSheetViewRoot>

export const BottomSheetView = ({ children, ...props } : BottomSheetViewProps) => {
  return <BottomSheetViewRoot {...props}>{children}</BottomSheetViewRoot> 
}
