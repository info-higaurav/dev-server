import mongoose from 'mongoose'

async function connectToDb () {
    const res = await mongoose.connect(process.env.MONGODB_URI as string ,{dbName:'dev-server'})
    console.log('Connected to MongoDB')
    console.log(res.connection.host)
}

export default connectToDb;