const { Router } = require('express');

const router = Router();

const mainController = require('./controllers/mainController');
const userController = require('./controllers/userController');
/**
 * Route Object
 */
router.get('/:id', mainController.oneObject);

router.get("/", mainController.allObjects);

router.post("/", mainController.addObject);

router.put('/:id', mainController.updateObject);

router.delete('/:id', mainController.deleteObject);

/**
 * Route User
 */
router.post('/signup', userController.signup);

router.post('login', userController.login);

module.exports = router;