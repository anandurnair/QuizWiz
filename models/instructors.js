import mongoose,{Schema} from 'mongoose'

const instructorSchema = new Schema(
    {
        instructorName : String,
        email : String,
        password : String
    }
);

const Instructors = mongoose.models.Instructors || mongoose.model('Instructors',instructorSchema)

export default Instructors