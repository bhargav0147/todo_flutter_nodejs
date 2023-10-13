const UserServices = require('../services/user.services');
const userServices = require('../services/user.services');

exports.register = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const successRes = await userServices.registerUser(email,password);
    
        res.json({ status: true, success: 'User registered successfully' });
    } catch (e) {
        throw e;
    }
}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        
        const user = userServices.checkUser(email);

        if(!user)
        {
            throw new Error('User dont Exist');

        }

        const isMatch = user.comparePassword(password);
        if(isMatch===false){
            throw new Error('Password Invalid');

        }

        let tokenData = {_id:user._id,email:user.email}

        const token = await UserServices.generateToken(tokenData,"secretKey",'1h');

        res.status(200).json({status:true,token:token})

    } catch (e) {
        throw e;
    }
}