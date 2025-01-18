import mongoose from "mongoose";

const individualData = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide the image"],
    },
    mobile: {
        type: Number,
        required: [true, " Please provide mobile number"]
    },
    whatsapp:{
        type: Number,
    },
    address:{
        type: String,
        required: [true, "Please provide address"]
    },
    kg:{
        type: Number,
        required: [true, "Please provide kg"]
    },
    paid:{
        type: Boolean,
        default: false,
        required: [true, "Please provide kg"]
    },
    Delivered:{
        type: Boolean,
        default: false,
        required: [true, "Please provide kg"]
    },
    timeStamp:{
        type: Date,
        default: Date.now()
    }
})

const Challenger = mongoose.models.individualData || mongoose.model('individualData', individualData);

export default Challenger;