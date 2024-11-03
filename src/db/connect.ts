import mongoose from "mongoose";

async function connection() {
    try {
        const response = await mongoose.connect(process.env.URI as string , {dbName:"dev-server"})
        console.log(response.connection.host)
    } catch (error) {
        throw error;
    }
}

export default connection;


