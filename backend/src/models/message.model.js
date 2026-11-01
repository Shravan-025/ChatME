import mongoose from "mongoose";

const meesageSchema = new mongoose.Schema({
    senderID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        reqyired: true,
    },
    receiverID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        reqyired: true,
    },
    text:{
        type: String,
    },
    image: {
        type: String,
    },
    video: {
        type: String,
    },

},
{timestamps:true});

const Message = mongoose.model("Message",meesageSchema);

export default Message;