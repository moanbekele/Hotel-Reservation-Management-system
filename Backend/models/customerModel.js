const mongoose = require('mongoose')
const customerSchema = mongoose.Schema(
    {
        first_name: {
            type: String,
            required: [true, 'Enter First Name']     
        },
        middle_name: {
            type: String,
            required: [true, 'Enter Middle number']     
        },
        last_name: {
            type: String,
            required: [true, 'Enter Last number']     
        },
        country: {
            type: String,
            required: [true, 'Enter Country']     
        },
        city: {
            type: String,
            required: [true, 'Enter City']     
        },
        phone: {
            type: Number,
            required: [true, 'Enter Phone Number']     
        },
        parking_pass: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true
    }
)

const Customer = mongoose.model('Customer', customerSchema); // use customerSchema for Customer model
module.exports = Customer; // Export Customer module