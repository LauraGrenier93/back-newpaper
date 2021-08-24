const customer = require('../models/customer');
const bcrypt = require('bcrypt');
const User =require ('../models/User');

const userController = {
    signup: async (req, res, next) => {
        try {
         const passwordHash=await bcrypt.hash(req.body.password,10);
         const user = await new User({
                        email: req.body.email,
                        password:passwordHash
        });
            await customer.addUser(user);
          res.status(201).json({ message:'utilisateur crée.'});
        } catch (error) {
            console.log(error.message);
            res.status(400).json(error.message);
        }
    },
    login: async (req, res, next) => {
        try {
            const user=await customer.login({email : req.body.email})
            if(!user){
                    return res.status(401).json({error:'utilisateur non trouvé.'});
            };
            const valid = await bcrypt.compare(req.body.password, user.password)
            if(!valid){
                return res.status(401).json({error:'mot de passe incorrect..'});
            }
            res.status(200).json({
                userId:user._id,
                token:'TOKEN'
            });
        } catch (error) {
            console.log(error.message);
            res.status(400).json(error.message);
        }
    },
}
module.exports = userController; 