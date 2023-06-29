const mongoose = require('mongoose')
const roomSchema = mongoose.Schema(
    {
        room_no: {
            type: String,
            required: [true, 'Enter room number']     
        },
        room_type: {
            type: String,
            required: [true, 'Enter room Type']     
        },
        availability: {
            type: String,
            required: [true],
            default: "Available"     
        }
    },
    {
        timestamps: true
    }
)

const Room = mongoose.model('Room', roomSchema);  // use roomSchema for Room model
module.exports = Room; // export Model