import { ComponentProps, createContext, ReactNode, useContext, useEffect, useState } from "react"
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

  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    if(!props.id){
      return
    }

    modalStore.subscribe(props.id, {visible: visible, setVisible})
  }, [])

  return <ModalRoot visible={visible} {...props}>{children}</ModalRoot>
}

type ModalBackgroundProps = ComponentProps<typeof View>
export const ModalBackground = ({ children, className, ...props } : ModalBackgroundProps) => {
  return <View className={twMerge("h-full w-full bg-black/70", className)} {...props}>{children}</View> 
}

type ModalListener = {
      visible:boolean,
      setVisible: React.Dispatch<React.SetStateAction<boolean>>
  }


type ModalStore = {
  listeners:{
    [key: string] : ModalListener
  },
  show(id:string) : unknown,
  close(id:string) : unknown,
  subscribe(id : string, listener:ModalListener):unknown
}

export const modalStore : ModalStore= {
  listeners:{},
  show(id: string){
    console.warn(this.listeners[id])
    this.listeners[id].setVisible(true)
  },
  close(id:string){
    this.listeners[id].setVisible(false)
  },
  subscribe(id : string, listener: ModalListener){
    this.listeners[id] = listener
  }
}
