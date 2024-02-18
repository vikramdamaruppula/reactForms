import { TextField } from '@mui/material'
import React from 'react'
import { Controller,useFormContext } from 'react-hook-form'

const SubComponent1 = () => {
    const{control,formState:{errors},watch} =useFormContext()
    const watchFirstname = watch("firstName")
    const watchLastname = watch("lastName")

  return (
    <div>     
      <Controller 
            name="firstName" 
            control={control}
            render={({field})=>(
              <TextField 
                {...field} 
                label="firstName"
                variant="outlined"
                error={!!errors.firstName}
                type="text"
                // helperText={errors.firstName && errors.firstName?.message}
                defaultValue=""
              />
            )}
            />
            { watchFirstname && <p> {watchFirstname}</p> }
            <br />
            <br />
              <Controller 
                name="lastName" 
                control={control}
                render={({field})=>(
                  <TextField 
                    {...field} 
                    label="lastName"
                    variant="outlined"
                    error={!!errors.lastName}
                    type="text"
                    // helperText={errors.lastName && errors.lastName?.message}
                    defaultValue=""
                />
            )}
            />
            { watchLastname && <p> {watchLastname}</p> }

    </div>
  )
}

export default SubComponent1
