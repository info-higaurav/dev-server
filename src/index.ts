import dotenv from 'dotenv'
import app from './app'

dotenv.config({
    path:"./.env"
})

app.listen(process.env.PORT || 3000 ,()=>{
    console.log("server Status : OK")
})