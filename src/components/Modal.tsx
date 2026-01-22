import { createContext } from "react"
import { Modal } from "react-native"

type ModalContextType = {
  visible: boolean
  toggle: () => unknown
}
const ModalContext = createContext<ModalContextType>({
  visible: false,
  toggle: () => undefined
})

export const ModalContainer = () => {
  return <Modal></Modal>
}
