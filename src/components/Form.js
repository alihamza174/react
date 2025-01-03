import Input  from "./Input"
import {userFormContext} from "react-hook-form"
import { AnimatePresernce, motion } from "framer-motion"

export const Form = () => {
  const methods = useForm()
  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
  })
  return (
    <>
      <FormProvider {...methods}>
        <Input label="name" type="text" id="name" placeholder="type your name..." />
        <Input label="password" type="password" id="password" placeholder="type your password..." />
      </FormProvider>
    </>
  )
}