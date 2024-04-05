    import mongoose,{Schema} from 'mongoose'

    const userSchema = new Schema(
        {
            username : String,
            email : String,
            password : String
        }
    );

    const Users = mongoose.models.Users || mongoose.model('Users',userSchema)

    export default Users