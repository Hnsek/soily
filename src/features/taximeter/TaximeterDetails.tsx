import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RouteList } from "../../Router"
import { SafeAreaView } from "react-native-safe-area-context"
import { View } from "react-native"
import { LineLayer, Map, MapCamera, ShapeSource } from "../../components/Map"
import { useEffect, useRef } from "react"
import { CameraRef } from "@maplibre/maplibre-react-native"
import { calculateBounds } from "../../utils/geospatial"
type Props = NativeStackScreenProps<RouteList,"TaximeterDetails">

export const TaximeterDetails = ({ route } : Props) => {  
  
  const { flag } = route.params
  
  const cameraRef = useRef<CameraRef>(null)
  
  useEffect(() => {
    const bounds = calculateBounds(flag.route)
    cameraRef.current?.fitBounds(bounds[0], bounds[1], 20)
  }, [])

  return <SafeAreaView className="w-full h-full p-7">
     <View className="border border-gray-200 w-full aspect-square rounded-lg overflow-hidden">
       <Map 
        onDidFinishRenderingMapFully={() => {
          const bounds = calculateBounds(flag.route)
          cameraRef.current?.fitBounds(bounds[0], bounds[1], 20)
        }}
        scrollEnabled={false}
        rotateEnabled={false}
        zoomEnabled={false}
       >
          <MapCamera ref={cameraRef}/> 
          {
            flag.route.length > 1 ?
            <ShapeSource id="route-shape" shape={{
              type: 'Feature',
              geometry: {
                type: 'LineString',
                coordinates: flag.route,
              },
              properties: {},
            }}>
             <LineLayer id="route-line" style={{ lineColor: '#36D7F4', lineWidth: 5 }} />
            </ShapeSource>
            :
            undefined
          }

       </Map> 
    </View>
  </SafeAreaView>
}
