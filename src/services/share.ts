import Share, { ShareOptions} from "react-native-share";

export const share = (options: ShareOptions) => {
  return Share.open(options)
}
