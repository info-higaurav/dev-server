import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

// importing routes
import health from './routes/test.routes'

const app = express()

// setting up server
app.use(cors({
    origin: '*',
    credentials:true
}))

app.use(express.json())
app.use(cookieParser())

// Routes config
app.use('/api/v1/health', health)

export default app;