import mongoose from 'mongoose';

let isConnected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true)
    
    if(isConnected) {
        console.log("Using existing connection")
        return
    }
    
    try{
        await mongoose.connect(process.env.MONGODB_URI as string, {
            dbName: 'xerocodee_db'
            
        })
        isConnected= true;
        console.log("Mongodb connected")
        
    }catch(e: any) {
        console.log("DB error", e.message)
    }
}

export default connectDB;