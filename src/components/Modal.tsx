import { createContext, ReactNode, useState } from "react"
import { Modal } from "react-native"

type ModalContextType = {
  visible: boolean
  toggle: () => unknown
}
const ModalContext = createContext<ModalContextType>({
  visible: false,
  toggle: () => undefined
})

type ModalContainerType = {
  children: ReactNode
}

export const ModalContainer = ({ children } : ModalContainerType) => {
  const [visible, setVisible] = useState<boolean>(false)

  const toggle = () => setVisible(visible => !visible)

  return <ModalContext.Provider value={{visible, toggle}}>{children}</ModalContext.Provider>
}
