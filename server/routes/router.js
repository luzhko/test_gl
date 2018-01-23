var express = require('express'),
    router  = express.Router(),
    userController  = require("../../server/controllers/userController");

router.get('/api/testApi', userController.testApi);
router.get('/api/getUserList', userController.getUsersList);
router.get('/api/getUserById/:db_id', userController.getUserById);
router.get('/api/getUserByName', userController.getUserByName);
router.post('/api/createUser', userController.createUser);
router.put('/api/updateUserById/:db_id', userController.updateUserById);


module.exports = router;