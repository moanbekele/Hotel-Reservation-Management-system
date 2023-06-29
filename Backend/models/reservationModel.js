const mongoose = require('mongoose')
const reservationSchema = mongoose.Schema(
    {
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer',
            required: [true, 'Enter Customer Id'] 
        },
        room: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Room',
            required: [true, 'Enter Room Id'] 
        },
        checkin_date: {
            type: Date,
            required: [true, 'Enter Check-In Date'] 
        },
        checkout_date: {
            type: Date,
            required: [true, 'Enter Check-Out Date'] 
        },
        

    },
    {
        timestamps: true
    }
)

const Reservation = mongoose.model('Reservation', reservationSchema); // use reservationSchema for Reservation model
module.exports = Reservation; // Export Reservation module