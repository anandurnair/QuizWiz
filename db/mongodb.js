import mongoose from 'mongoose'
const dbConnect = ()=>{
  try {
    mongoose.connect('mongodb+srv://anandurpallam:MXSURXBZQfoF5RCm@cluster1.uxacjex.mongodb.net/');
    console.log('connnected')
  } catch (error) {
    console.log(error);
  }
}
export default dbConnect