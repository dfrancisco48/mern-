import mongoose from 'mongoose'

export const beveragesSchema = new mongoose.Schema(
    {
        code: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        semester: { type: Number, required: true },
        year: { type: Number, required: true },
        specialization: String,
        lectureHours: { type: Number, required: true },
        labHours: { type: Number, required: true }
    },
    { timestamps: true }
)

const beverages = mongoose.model('beverages', beveragesSchema)
export default beverages
