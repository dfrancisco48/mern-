import mongoose from 'mongoose'

const flavorsSchema = new mongoose.Schema(
    {
        code: { type: String, required: true , unique: true },
        fullName: { type: String, required: true },
        years: { type: Number, required: true },
        specialization: []
    },
    { timestamps: true }
)

const flavors = mongoose.model('flavors', flavorsSchema)
export default flavors