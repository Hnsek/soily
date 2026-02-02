
import { Pressable, View } from "react-native"
import { Button } from "../../../components/Button"
import { z } from "zod"
import { Controller, useForm } from "react-hook-form" 
import { zodResolver } from "@hookform/resolvers/zod"
import { NumericInput } from "../../../components/Input"
import { Text } from "../../../components/Text"
import { XMarkIcon } from "react-native-heroicons/mini"

const schema = z.object({
  quantity: z.number().nonnegative()
})

export type PlantingFormData = z.output<typeof schema>

type PlantingFormProps = {
  title?:string
  onClose?: () => unknown
  onSubmit?:(data : PlantingFormData) => unknown
}
export const PlantingForm = ({ onSubmit,  onClose, title } : PlantingFormProps) => {
    
  const { control, handleSubmit } = useForm({
   resolver:  zodResolver(schema)
  })
  
  const submit = (data : PlantingFormData) => {
    onSubmit?.(data)
  }

  return <View className="p-4 bg-background gap-4">
      <View className="flex w-full flex-row justify-between items-center">
        <Text className="text-black font-bold">{title}</Text>
        <Pressable onPressOut={() => onClose?.()}>
          <XMarkIcon size={40}/>
        </Pressable>
      </View>
      <Text className="text-black">Quantos KG vão ser plantados?</Text>
      <Controller
        name="quantity"
        control={control}
        render={({field})=>{
          return <NumericInput placeholder="Quantidade (KG)" {...field} onChangeValue={field.onChange} delimiter=","/>
        }}
        />

      <Button onPressOut={handleSubmit(submit)}>
        <Text>Plantar</Text>
      </Button>
    </View>
}
