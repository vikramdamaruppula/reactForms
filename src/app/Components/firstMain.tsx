'use client'
import {useForm ,SubmitHandler,Controller,FormProvider} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import { TextField } from "@mui/material"
interface FormInput{
  username:string;
  password:string;
}

const schema = yup.object().shape({
  username:yup.string().email().required(),
  password:yup.string().required().min(4).max(12)
})

export default function Home() {

  const {handleSubmit,control,formState:{errors},watch} =useForm<FormInput>({
    resolver:yupResolver(schema)
  })
  const submitFormInputs: SubmitHandler<FormInput> = (data:FormInput)=>{
    console.log("form submitted",data)
  }
  console.log(errors,"errors")
  const userErr:any = errors.password?.message
  const errMsg2:any = errors.username?.message
  const watch1 = watch("username")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit(submitFormInputs)}>
      <div className="">

        <Controller 
            name="username" 
            control={control}
            render={({field})=>(
              <TextField {...field} 
                label="Email"
                variant="outlined"
                error={!!errors.username}
                type="email"
                helperText={errors.username && errors.username?.message}
                defaultValue="hii@gmail.com"
              />
            )}
            />
            <br />
            <br />
              <Controller 
                name="password" 
                control={control}
                render={({field})=>(
                  <TextField {...field} 
                    label="password"
                    variant="outlined"
                    error={!!errors.password}
                    type="text"
                    helperText={errors.password && errors.password?.message}
                    defaultValue=""
                />
            )}
            />
        <p> watching :-- {watch1}</p>
        <br/>
        {errMsg2 && <p>{errMsg2} </p>}
        <br/>
        {/* {userErr && <p> {userErr} </p>} */}
        <br/>
        {/* <Button type="submit" /> */}
        <input type="submit" style={{backgroundColor:"lightblue"}} />
      </div>
      </form>
    </main>
  );
}
