import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RouteList } from "../../Router"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text, View } from "react-native"
import { LineLayer, Map, MapCamera, ShapeSource } from "../../components/Map"
import { useEffect, useRef } from "react"
import { CameraRef } from "@maplibre/maplibre-react-native"
import { calculateBounds } from "../../utils/geospatial"
import { Button } from "../../components/Button"

type Props = NativeStackScreenProps<RouteList,"TaximeterDetails">

export const TaximeterDetails = ({ route, navigation } : Props) => {  
  
  const { flag } = route.params
  
  const cameraRef = useRef<CameraRef>(null)
  
  const viewRef = useRef(null)

  useEffect(() => {
    const bounds = calculateBounds(flag.route)
    cameraRef.current?.fitBounds(bounds[0], bounds[1], 20)
  }, [])

  return <SafeAreaView className="w-full h-full p-7">
    <View ref={viewRef}> 
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
      <View className="w-full flex flex-col p-8 gap-5">
        <View className="flex flex-row items-center justify-center w-full">
          <Text className="text-5xl font-bold">${flag.finalPrice}</Text>
        </View>
        <View className="flex flex-col gap-1 w-full items-center">
          <View className="flex flex-row gap-1">
            <Text className="text-2xl font-bold">Distance: </Text>      
            <Text className="text-2xl">{flag.distance / 1000} KM</Text>      
          </View>  
          <View className="flex flex-row gap-1">
            <Text className="text-2xl font-bold">Price per KM: </Text>      
            <Text className="text-2xl">${flag.price}</Text>      
          </View>  
        </View>
      </View>
    </View>
    <View className="absolute bottom-0 w-screen flex flex-col justify-center p-4 gap-4">
      <Button onPress={()=> {}}>
          <Text className="text-xl text-white font-bold">Share</Text>
      </Button>
      <Button className="bg-secondary" onPress={()=> navigation.navigate("Taximeter")}>
          <Text className="text-xl text-white font-bold">Back to Home</Text>
      </Button>
    </View>
  </SafeAreaView>
}
