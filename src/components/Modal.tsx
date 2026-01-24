import { ComponentProps, createContext, ReactNode, useContext, useState } from "react"
import { Modal as ModalRoot, View} from "react-native"
import { twMerge } from "tailwind-merge"

type ModelContextType = {
  visible: boolean,
  show: () => unknown,
  close: () => unknown
}
const ModalContext = createContext<ModelContextType>({
  visible: false,
  show: () => undefined,
  close: () => undefined
})

export const useModal = () => useContext(ModalContext)

type ModalContainerProps = {
  children: ReactNode
}

export const ModalContainer = ({ children } : ModalContainerProps) => {
  const [visible, setVisible] = useState(false)

  const show = () => setVisible(true)
  const close = () => setVisible(false)
  
  return <ModalContext.Provider value={{ visible, show, close}}>{children}</ModalContext.Provider>
}

type ModalProps = ComponentProps<typeof ModalRoot>
export const Modal = ({children, ...props} : ModalProps) => {
  const { visible } = useModal()
  return <ModalRoot visible={visible} {...props}>{children}</ModalRoot>
}

type ModalBackgroundProps = ComponentProps<typeof View>
export const ModalBackground = ({ children, className, ...props } : ModalBackgroundProps) => {
  return <View className={twMerge("h-full w-full bg-black/70", className)} {...props}>{children}</View> 
}
