var express  = require('express');
var router = express.Router();
var formCtrl = require('../forms/controller');

router.use(function(req, res, next) {
    next();
});

router.get('/', formCtrl.getForm); // Return the description of a form
router.post('/', formCtrl.addForm); //Add a form for specified user
router.delete('/:id', formCtrl.deleteForm ); //Delete a form by ID
router.put('/:id', formCtrl.updateForm );  //Update a form by ID

router.get('/myForms/:userID', formCtrl.getFormsForUser); //Return forms list by user ID
router.get('/myforms/form/:formID', formCtrl.getFilledForm); //Return filled form by form ID
router.post('/myForms/:formID', formCtrl.filledForm ); //Add filled form by form ID
router.delete('/myForms/:formID/all', formCtrl.deleteFilledForms); //Delete all filled forms by form ID
router.delete('/myForms/:formID/:ids', formCtrl.deleteFilledRowsForAForm); //Delete some filled forms
router.put('/myforms/:formID/:ids', formCtrl.shareFormWithUsers); //Share form with users

module.exports = router;
