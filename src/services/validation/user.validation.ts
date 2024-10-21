import {z} from 'zod'

export const validateUserPayload = z.object({
    fname:z
    .string({
        required_error:'First name is required',
        invalid_type_error:'First name must be a string'
    }).optional(),
    lname:z
    .string({
        required_error:'Last name is required',
        invalid_type_error:'Last name must be a string'
    }).optional(),

    email:z
    .string({
        required_error:"Email is requried"
    }).email({
        message:"Valid email is required"
    }),

    password:z
    .string({
        required_error:'Password is required',
    })
    .min(4,'Password must be at least 8 characters long')
    .max(8,{message:"must be at less than 8 characters"}),
    

})