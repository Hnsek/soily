import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

export const schema = z.object({
  currency: z.string(),
  value: z.number()
})

export const useTaximeterForm = () => {
  const form = useForm({
   resolver: zodResolver(schema)
  })

  return form
}
