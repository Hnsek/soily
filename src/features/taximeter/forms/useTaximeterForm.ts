import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

export const schema = z.object({
  currency: z.string().nonempty(),
  value: z.string().nonempty()
})

export const useTaximeterForm = () => {
  const form = useForm({
   resolver: zodResolver(schema),
   defaultValues:{
    currency:"dollar",
    value: "0"
   }
  })

  return form
}
