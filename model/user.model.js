const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;
const userSchema = new Schema({
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required:true,
    },
},);

userSchema.methods.comparePassword = async function(userPassword){
    try
    {
        const isMatch = await compare(userPassword,this.password)
        return isMatch;
    }catch(e){
        throw e;
    }
}

const UserModel = db.model('user',userSchema);
module.exports = UserModel;