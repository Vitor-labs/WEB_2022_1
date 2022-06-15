import mongoose from 'mongoose'

const ProfessorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 100
    },
    university: {
        type: String,
        required: true,
        max: 80
    },
    degree: {
        type: String,
        required: true,
        max: 60
    }
})

export default mongoose.model('Professor', ProfessorSchema)
