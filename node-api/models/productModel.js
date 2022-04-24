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
    },
    brand : String
}, {
    timestamps: true,
    toObject: {
        transform: function(doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;

        }
    }
})

module.exports = mongoose.model('Product', productSchema);
