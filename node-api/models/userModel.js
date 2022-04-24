const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;
    //   passportLocalMongoose = require('passport-local-mongoose');



const userSchema = new Schema({
    email : {
        type : String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true,
        unique: true
    }
},
    {
    timestamps: true,
    toObject: {
        transform: function(doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;
            return ret;

        }
    }
})

// UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
