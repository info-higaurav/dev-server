import dotenv from 'dotenv'
import app from './app'
import connectToDb from './db/connect'

dotenv.config({
    path:"./.env"
})

connectToDb()
.then(()=>{
    app.listen(process.env.PORT || 3000 ,()=>{
        console.log("server Status : OK")
    })
})
.catch((err)=>{
    console.log("Mongodb Connection failed " + err)
    process.exit(1)
})
