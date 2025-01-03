import {useForm } from "react-hook-form"

export const Form = () => {
  const {register, handleSubmit, formState: {errors}} = useForm({
                                            defaultValues: {firstName: "ali", lastName: "hamza"}
                                          })
  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="formControl">
      <input {...register("firstName", {required: true})} className="form-control mt-1" />
      {errors.firstName?.type == "required" && (<p className="errors">First name is required</p>)}
      <input {...register("lastName", {required: true})} className="form-control mt-1" />
      {errors.lastName?.type == "required" && (<p className="errors">Last name is required</p>)}
      <input type="submit" className="btn btn-primary" />
      </form>
    </>
  )
}