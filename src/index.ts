import dotenv from 'dotenv'
import connection from './db/connect'
import app from "./app";

dotenv.config({
    path: "./.env"
})

const PORT = process.env.PORT || 5000

connection()
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server is running")
        })

    })
    .catch((err) => console.log(err))

