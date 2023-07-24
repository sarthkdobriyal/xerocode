import mongoose from 'mongoose';

let isConnected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true)
    
    if(isConnected) {
        console.log("Using existing connection")
        return
    }
    
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'xerocodee_db',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected= true;
        console.log("Mongodb connected")
        
    }catch(e) {
        console.log("DB error", e.message)
    }
}

export default connectDB;