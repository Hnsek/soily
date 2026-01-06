import { ReactInstance, RefObject } from "react"
import { View } from "react-native"
import { CaptureOptions, captureRef } from "react-native-view-shot"


export const captureView = (viewRef : number | RefObject<View> | ReactInstance, options?: CaptureOptions) => {
  return captureRef(viewRef, options)
}
