const Thing = require('../models/thing');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI,
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

   const Objects = {
    /**
    * Method in charge of getting all the information related to all the objects
    * @returns - all objects present in BDD
    * @static -method static
    * @async - method asynchrone
    */
     findAll: async ()=>{
        const things= await Thing.find();
        return things;
    },
    /**
     * Method in charge of getting all the information related to one object
     * @param {string} IdParams 
     */
     findOne: async (IdParams) => {
      const thing=Thing.findOne({_id:IdParams});
      return thing;
    },
    /**
     * Method that adds an object to the database
     * @param {object} data 
     */
    addObject:async(data) => {
       // console.log('models objects req.body',data);
        const thing = await new Thing(data);
        thing.save();
    },         
/**
 *  Method that modifies an object to the database
 * @param {string} IdParams 
 * @param {bject} dataBody 
 */
   updateObject:async(IdParams, dataBody) => {
   await Thing.updateOne({_id:IdParams}, {...dataBody, _id: IdParams})
   },
/**
 * Method that deletes an object to the database
 * @param {string} IdParams 
 */
    deleteObject:async(IdParams)=>{
    await Thing.deleteOne({_id:IdParams})
  },
};
module.exports =Objects;