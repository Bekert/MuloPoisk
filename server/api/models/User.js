const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    regDate: {
        type: Date,
        default: Date.now,
    },
    filmCollection: {
        type: [Object],
        required: false,
    },
})

// [
//     {
//         film: 'Pepega',
//         rate: 8,
//         rateDate: Date.now
//         lists: {
//             lovely: Date.now,
//             wantToWatch: Date.now
//         },
//     },
// ]

module.exports = User = mongoose.model('users', UserSchema)
