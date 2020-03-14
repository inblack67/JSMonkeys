const express = require('express');
const router = express.Router();
const { register } = require('../controllers/users');
const { protect } = require('../middlewares/auth');


router.post('/', register);



module.exports = router;