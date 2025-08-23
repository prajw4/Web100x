const mongoose = require('mongoose');
require('dotenv').config();
const db = process.env.Mongo;

mongoose.connect(db)
    .then(() => {
        console.log("Connected to MongoDB successfully");
    })
    .catch(err => {
        console.error("Mongo Connection error: ", err);
    });

    const userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true,
            trim:true,
            lowercase: true,
            minlenghth: 3,
            maxlength: 30
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
            
        },
        firstname:{
            type: String,
            required: true,
            trim: true,
            maxlength: 30
        },

        lastname:{
            type: String,
            required: true,
            trim: true,
            maxlength: 50
        }

    });

    const accountSchema = new mongoose.Schema({
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        balance:{
            type: Number,
            
            required: true
        }
    });

    const Account = mongoose.model("Account", accountSchema);
const User = mongoose.model("User", userSchema);

module.exports = {
    User,
    Account
}

