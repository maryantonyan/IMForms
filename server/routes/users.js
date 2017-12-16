var express  = require('express');
var router = express.Router();
var userCtrl = require('../users/controller');

router.use(function(req, res, next) {
    next();
});

router.get('/:email', userCtrl.forgotPassword); //Forgot password
router.post('/addUser', userCtrl.addUser);  //Register
router.post('/verifyUser', userCtrl.verifyUser); //Verify user
router.delete('/:id', userCtrl.deleteUser); // delete user by user ID
router.put('/:id', userCtrl.updatePassword); // Update password by user ID

module.exports = router;
