const Object = require('../models/object');

const mainController = {
    /**
     * method for display all objects
     * @param {req} request 
     * @param {res} response 
     */
    allObjects: async (_, res) => {
        try {
            const objects = await Object.findAll();
            res.status(200).json(objects)
        } catch (error) {
        console.log(error.message);
        res.status(400).json(error.message);
      }
    },
    /**
     * method for display one object
     * @param {request} req 
     * @param {response} res 
     */
    oneObject: async (req, res) => {
        try {
            const object =await Object.findOne(req.params.id);
            res.status(200).json(object);
        } catch (error) {
            console.log(error.message);
            res.status(400).json(error.message);
        }
    },
    /**
     * Methode for add one object
     * @param {request} req 
     * @param {response} res 
     */
    addObject:async(req, res) => {
        try {
            // console.log('mainController req.body',req.body)
            await Object.addObject(req.body);
            res.status(201).json({ message: 'Objet enregistré !'});
        } catch (error) {
            console.log(`Erreur lors de l'enregistrement de l'article: ${error.message}`);
            res.status(500).json(error.message);
        }
    },
    /**
     * Methode for modifie one object
     * @param {request} req 
     * @param {response} res 
     */
    updateObject:async(req, res) => {
        try {
           // console.log('mainController req.body',req.body)
          //  console.log('mainController req.params.id',req.params.id)
            await Object.updateObject(req.params.id, req.body);
            res.status(200).json({message : 'Objet modifié'});
        } catch (error) {
            console.log(`Erreur lors de la modification de l'article: ${error.message}`);
            res.status(500).json(error.message);
        }
    },
    /**
     * Methode for delete one object
     * @param {request} req 
     * @param {response} res 
     */
    deleteObject:async(req,res)=>{
        try {
            await Object.deleteObject(req.params.id)
            res.status(200).json({message : 'Objet supprimé'});
        } catch (error) {
            console.log(`Erreur lors de la suppression de l'article: ${error.message}`);
            res.status(500).json(error.message);
        }
    },
};

module.exports = mainController; 