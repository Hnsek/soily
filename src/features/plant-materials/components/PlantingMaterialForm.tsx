import { Pressable, View } from "react-native"
import { Button } from "../../../components/Button"
import { z } from "zod"
import { Controller, useForm } from "react-hook-form" 
import { zodResolver } from "@hookform/resolvers/zod"
import { NumericInput, TextInput } from "../../../components/Input"
import { Text } from "../../../components/Text"
import { XMarkIcon } from "react-native-heroicons/mini"

const schema = z.object({
  name: z.string().nonempty(),
  quantity: z.number().nonnegative()
})

type PlantMaterialFormData = z.output<typeof schema>

type PlantMaterialFormProps = {
  onClose?: () => unknown
  onSubmit?:(data : PlantMaterialFormData) => unknown
}
export const PlantMaterialForm = ({ onSubmit,  onClose } : PlantMaterialFormProps) => {
    
  const { control, handleSubmit } = useForm({
   resolver:  zodResolver(schema)
  })
  
  const submit = (data : PlantMaterialFormData) => {
    data.name = data.name.trim()

    onSubmit?.(data)
  }

  return <View className="p-4 bg-background gap-4">
      <View className="flex w-full flex-row justify-end items-center">
        <Pressable onPressOut={() => onClose?.()}>
          <XMarkIcon size={40}/>
        </Pressable>
      </View>
      <Controller
        name="name"
        control={control}
        render={({field})=>{
          return <TextInput placeholder="Nome" {...field} onChangeText={field.onChange}/>
        }}
        />
      
      <Controller
        name="quantity"
        control={control}
        render={({field})=>{
          return <NumericInput placeholder="Quantidade (KG)" {...field} onChangeValue={field.onChange} delimiter=","/>
        }}
        />

      <Button onPressOut={handleSubmit(submit)}>
        <Text>Registrar</Text>
      </Button>
    </View>
}
