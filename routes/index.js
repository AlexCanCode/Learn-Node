const express = require('express'); 
const router = express.Router(); 
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers'); //Object destructuring - imports the one error handler we need off of the error handling object

// Do rounting work here
router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.post('/add', catchErrors(storeController.createStore));

module.exports = router;
