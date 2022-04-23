const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;


const productSchema = new Schema({
    name : {
        type : String,
        required: true
    },
    price : {
        type: Number,
        required: true,
        // unique: true
    },
    brand : String
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema);
