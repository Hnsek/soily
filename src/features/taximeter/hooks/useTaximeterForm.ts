import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

export const schema = z.object({
  currency: z.string().nonempty(),
  price: z.string().nonempty()
})

export type TaximeterFormValues = z.infer<typeof schema>

export const useTaximeterForm = () => {
  const form = useForm({
   resolver: zodResolver(schema),
   defaultValues:{
    currency:"dollar",
    price: "0"
   }
  })

  return form
}
