import dotenv from 'dotenv'
import app from './app'
import connectToDb from './db/connect'

dotenv.config({
    path:"./.env"
})

// import routes
import user from './routes/user.route'

// config routes
app.use('/api/v1/users', user)

// connect to database
connectToDb()

// start server
.then(()=>{
    app.listen(process.env.PORT || 3000 ,()=>{
        console.log("server Status : OK")
    })
})

.catch((err)=>{
    console.log("Mongodb Connection failed " + err)
    process.exit(1)
})
