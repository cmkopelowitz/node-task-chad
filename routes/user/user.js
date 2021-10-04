const router = require('express').Router();
const addUser = require('../../controllers/userController');


/**
 * Add your /add-user post route here
 */
router.post("/add-user", addUser);

module.exports = router;
