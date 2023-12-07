
import connectDB from '../../../utils/db';
import Student from '../../../models/Student';

connectDB(); // Function to connect to MongoDB
 
export const GET =async(req)=>{
  try {
    const body = await req.json();
    console.log('body',body);
  } catch (error) {
    
  }
}