const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/auth');
const { getMe, login } = require('../controllers/auth');


router.post('/', login)
router.get('/', protect, getMe);



module.exports = router;