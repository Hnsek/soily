import { MapView } from "@maplibre/maplibre-react-native"
import { ReactNode } from "react";
import { View } from "react-native";

type Props = {
    className?: string;
}

export default ({className} : Props) : ReactNode  => {
  return <View>
    <MapView
      mapStyle="https://tiles.openfreemap.org/styles/liberty"
      style={[{height:"100%", width:"100%"}]}
      >
    </MapView>
  </View>

}
