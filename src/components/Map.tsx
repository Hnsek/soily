import { MapView, Camera, CameraRef } from "@maplibre/maplibre-react-native"
import { ReactNode, Ref } from "react";
import { View } from "react-native";
import { twMerge } from "tailwind-merge";

type MapProps = {
    className?: string;
    children?: ReactNode
}

export const Map = ({className, children} : MapProps) : ReactNode  => {
  return <View className={twMerge(className, "w-full h-full")}>
    <MapView
      
      mapStyle="https://tiles.openfreemap.org/styles/liberty"
      style={[{height:"100%", width:"100%"}]}
      >
      {children}
  {/* <Camera zoomLevel={17} centerCoordinate={[-36.6477609, -9.7461033]}/> 
     */}
  </MapView>
  </View>

}

type MapCameraProps = {
  ref?: Ref<CameraRef>
  zoomLevel?:number;
  centerCoordinate?:GeoJSON.Position
}

export const MapCamera = ({ref,zoomLevel, centerCoordinate} : MapCameraProps) : ReactNode => {
  return <Camera ref={ref} zoomLevel={zoomLevel} centerCoordinate={centerCoordinate}/>
}
