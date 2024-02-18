import { TextField } from '@mui/material'
import React from 'react'
import { Controller ,useFormContext} from 'react-hook-form'


const SubComponent2 = () => {
    const {control,formState:{errors}} = useFormContext()
  return (
    <div>
      
      <Controller
            name="username" 
            control={control}
            render={({field})=>(
              <TextField {...field} 
                label="Email"
                variant="outlined"
                error={!!errors.username}
                type="email"
                // helperText={errors.username ? errors.username?.message:""}
                // helperText={errors.username && errors.username?.message}
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
                    // helperText={errors.password && errors.password?.message}
                    defaultValue=""
                />
            )}
            />
    </div>
  )
}

export default SubComponent2
