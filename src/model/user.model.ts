import mongoose ,{Document, Schema} from 'mongoose'

interface IUser extends Document {
    fname:string
    lname:string
    email:string
    password:string
}

const userSchema:Schema<IUser> = new Schema({
    fname:{
        type:String
    },
    lname:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }    
})

export const User = mongoose.model<IUser>('User',userSchema)
