import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 100
    },
    course: {
        type: String,
        required: true,
        max: 80
    },
    ira: {
        type: Number,
        required: true
    }
});

export default mongoose.model('Student', StudentSchema);
