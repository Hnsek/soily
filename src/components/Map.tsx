import { MapView, Camera, CameraRef, MarkerView } from "@maplibre/maplibre-react-native"
import { ReactElement, ReactNode, Ref, useEffect } from "react";
import { View } from "react-native";
import { useSharedValue, withTiming } from "react-native-reanimated";
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

type MapMarkerProps = {
  children: ReactElement,
  coordinate: GeoJSON.Position
}

export const MapMarker = ({children, coordinate} : MapMarkerProps) => {
  return <MarkerView coordinate={coordinate}>
    {children}  
  </MarkerView>
}

type AnimatedMapMarkerProps = {
  children: ReactElement,
  coordinate: GeoJSON.Position
}

export const AnimatedMapMarker = ({ children, coordinate } : AnimatedMapMarkerProps) => {
  const longitude = useSharedValue(coordinate[0])
  const latitude = useSharedValue(coordinate[1])

  useEffect(() => {
    longitude.value = withTiming(coordinate[0], { duration: 2000 })
    latitude.value = withTiming(coordinate[1], { duration: 2000 })
  }, [coordinate])

  return <MapMarker coordinate={coordinate}>{ children }</MapMarker>
}
