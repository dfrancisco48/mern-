import mongoose from 'mongoose'
import { beveragesSchema } from './beverages.js'

const SodaSchema = new mongoose.Schema(
    {
        version: { type: String, required: true, unique: true },
        year: { type: Number, required: true },
        programId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Program',
            required: true
        },
        courses: [beveragesSchema]
    },
    { timestamps: true }
)

const soda = mongoose.model('Soda', SodaSchema)
export default Soda