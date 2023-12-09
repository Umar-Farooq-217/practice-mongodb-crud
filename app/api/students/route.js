
import { userModel } from '@/model/Student';
import dbConnect from '@/config/db';
import { NextResponse } from 'next/server';


dbConnect(); // Function to connect to MongoDB
 
export const POST = async (req, res) => {
  try {
    const body = await req.json();
    console.log('body', body);
    
    // Correct the property name to 'address'
    if (body.name && body.rollNumber && body.address) {
      // Ensure 'userModel' is properly defined/required
      const student = new userModel(body);
      await student.save();
      
      // Assuming 'NextResponse' is handling response, adjust to your framework's method
      return NextResponse.json('successfully posted');
    } else {
      // Handle case when required properties are missing
      return NextResponse.json('Incomplete data');
    }
  } catch (error) {
    console.log('error', error);
    // Return the actual error message or status code for better error handling
    return NextResponse.json('Failed to post data');
  }
};


export const GET = async () => {
  try {
    const body = await userModel.find({}); // Assuming userModel is a Mongoose model

    // Return fetched data as a JSON response
    return NextResponse.json({ message: "success", users: body });
  } catch (error) {
    console.error('Error:', error); // Log the actual error for debugging
    // Return an appropriate error message or status code in the response
    return NextResponse.json({ message: "Failed to retrieve data", error: error.message });
  }
};export const PUT = async (req) => {
  try {
    let body = {};
    try {
      body = await req.json();
    } catch (jsonError) {
      console.error('Error parsing JSON:', jsonError);
      throw new Error('Invalid JSON data');
    }

    console.log('Received _id:', body.id); // Log the _id value

    if (body.id) {
      // Assuming `userModel` is properly defined
      await userModel.updateOne({ _id: body.id }, body);
      return NextResponse.json('data is updated');
    }
  } catch (error) {
    console.error('Error updating data:', error); // Log the error for debugging
    return NextResponse.json({
      message: 'Something went wrong',
      error: error.message || 'Unknown error occurred',
    });
  }
};


export const DELETE = async (req) => {
  try {
      const body = await req.json()
      console.log("body", body)
      if (body.id) {
          // database
          await userModel.deleteOne({
              _id: body.id
          })
          return NextResponse.json({ message: "successfully product deleted" })
      }
  } catch (error) {
      return NextResponse.json({
          message: "something went wrong",
          error: JSON.stringify(error)
      })
  }
}

