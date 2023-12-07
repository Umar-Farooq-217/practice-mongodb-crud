import mongoose from "mongoose";

const connection = {
    
}

export default async function  dbConnect() {
 if(connection.isConnected){
    return
 }
const db =await mongoose.connect(process.env.DATABASEINFORMATION)
 console.log('db',db);
 connection.isConnected=db.connections[0].readyState
}