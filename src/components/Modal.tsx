import { ComponentProps, createContext, ReactNode, useContext, useState } from "react"
import { Modal as ModalRoot } from "react-native"

type ModalContextType = {
  visible: boolean
  toggle: () => unknown
  show: () => unknown
  close: () => unknown
}
const ModalContext = createContext<ModalContextType>({
  visible: false,
  toggle: () => undefined,
  show: () => undefined,
  close: () => undefined
})

export const useModal = () => useContext(ModalContext)

type ModalContainerType = {
  children: ReactNode
}

export const ModalContainer = ({ children } : ModalContainerType) => {
  const [visible, setVisible] = useState<boolean>(false)

  const toggle = () => setVisible(visible => !visible)
  const show = () => setVisible(true)
  const close = () => setVisible(false)

  return <ModalContext.Provider value={{visible, toggle, show, close}}>{children}</ModalContext.Provider>
  
}

export const Modal = ({children, visible : visibleProp, ...props} : ComponentProps<typeof ModalRoot>) => {
  const { visible: visibleContext } = useModal()

  return <ModalRoot visible={visibleContext || visibleProp} {...props}>{children}</ModalRoot>
}

