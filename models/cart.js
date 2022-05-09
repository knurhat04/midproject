const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    img: {
        type: String,
        required: false,
    },
    name: {
        type: String,
    },
    cost: {
        required: false,
        type: String,
    }
})

module.exports = mongoose.model('carts', cartSchema)