const express = require('express');
const UserContoller = require('../controller/UserController');

const router = express.Router();

router.post('/CreateUser', UserContoller.CreateNewUser)


module.exports = router;