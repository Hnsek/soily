import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Map from "../../components/Map"
import useLocation from "../../hooks/useLocation"


export const Taximeter = () => {
  const { location } = useLocation()  

  console.warn(location)

  return <SafeAreaView>
      <Map></Map>
</SafeAreaView>
}
