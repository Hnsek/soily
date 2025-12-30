import { MapView } from "@maplibre/maplibre-react-native"
import { ReactNode } from "react";
import { View } from "react-native";
import { twMerge } from "tailwind-merge";

type Props = {
    className?: string;
    children?: ReactNode
}

export default ({className, children} : Props) : ReactNode  => {
  return <View className={twMerge(className, "w-full h-full")}>
    <MapView
      mapStyle="https://tiles.openfreemap.org/styles/liberty"
      style={[{height:"100%", width:"100%"}]}
      >
      {children}
    </MapView>
  </View>

}
