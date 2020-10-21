const mongoose = require('../db/connection')
const Schema = mongoose.Schema

// collection = table
// document(Model) = entries
const ownerSchema = new Schema({
    name: { type: String, required: true },
    cat: [
        { ref: 'Cat', type: Schema.Types.ObjectId}
    ]
})

const Owner = mongoose.model('Owner', ownerSchema)

module.exports = Owner