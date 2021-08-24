const mongoose = require('mongoose');
const User =require ('../models/User');

mongoose.connect(process.env.MONGODB_URI,
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

const Customers = {
    signup: async (user) => {
        await user.save();
    },
    login: async(email)=>{
        User.findOne(email);
    },
}

module.exports =Customers;