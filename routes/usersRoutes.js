const controller = require('../controllers/UserController');
const router = require('express').Router();

// CRUD Routes /users
router.get('/', controller.users); // /users
router.get('/:userId', controller.userById); // /users/:userId
router.post('/', controller.user); // /users
router.put('/:userId', controller.updateUser); // /users/:userId
router.delete('/:userId', controller.deleteUser); // /users/:userId

module.exports = router;
