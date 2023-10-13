const userModel = require('../model/user.model')
const jwt = require('jsonwebtoken');
class UserServices
{
    static async registerUser(email,password){
        try{
                const createUser = new userModel({email,password});
                return await createUser.save();
        }catch(e){
            throw e;
        }
    }

    static async checkUser(email)
    {
        try{
                return await userModel.findOne({email});
        }catch(e){

        }
    }

    static async generateToken(tokenData,secretKey,jwt_expire){
        return jwt.sign(tokenData,secretKey,{expiresIn:jwt_expire});
    }

}

module.exports = UserServices;