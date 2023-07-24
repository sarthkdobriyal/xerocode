import { Schema, model, models } from 'mongoose'
import { number } from 'zod'


const formSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minlength: 3,
        maxlength: 20,
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        unique: [true, 'Email already exists!'],
    },
    phone: {
        type: Number,
        required: [true, 'Phone is required!'],
    },
    city: {
        type: String,
        required: [true, 'City is required!']
    }
}, {
    timestamps: true,
})

const waitlist = models.waitlist || model('waitlist', formSchema)

export default waitlist;