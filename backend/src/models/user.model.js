import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerlId: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type : String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        requierd: true,
    },
    profilePic: {
        type: String,
        default: "", 
    }
},
{   timestamps: true}, //creaetdAt & updatedAt
);

const User = mongoose.model("User",userSchema);

export default User;