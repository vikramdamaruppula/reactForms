'use client'
import {useForm ,SubmitHandler,Controller,FormProvider} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
// import { TextField } from "@mui/material"
// import { error } from "console";
import SubComponent1 from "./Components/SubComponent1";
import SubComponent2 from "./Components/SubComponent2";
import { useState } from "react";
interface FormInput{
  username:string;
  password:string;
  firstName:string;
  lastName:string;
}

const schema = yup.object().shape({
  username:yup.string().email().required(),
  password:yup.string().required().min(4).max(12),
  firstName:yup.string().required(),
  lastName:yup.string().required()
})

export default function Home() {
  const[formValues,setFormValues] =useState<any>([])
  console.log(formValues,"form values")

  const methods =useForm<FormInput>({
    resolver:yupResolver(schema)
  })
  const submitFormInputs: SubmitHandler<FormInput> = (data:FormInput)=>{
    setFormValues(data)
    console.log("form submitted",data)
  }
  // console.log(methods.errors,"errors")
  // const userErr:any = methods.errors.password?.message
  // const errMsg2:any = errors.username?.message
  const watch1 = methods.watch("username")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitFormInputs)}>
      <div className="">
        <SubComponent1 />
        <br />
        <SubComponent2 />

        <input type="submit" style={{backgroundColor:"lightblue"}} />
        {formValues &&
        <>
        <span> firstName:--{formValues?.firstName} </span>
        <span>lastname:--{formValues?.lastName} </span>
        <span>password:--{formValues?.password} </span>
        <span>email :--{formValues?.email} </span>
        </>
        }

      </div>
      </form>
      </FormProvider>
    </main>
  );
}
