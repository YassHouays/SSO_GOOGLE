const express = require('express');
const router = express.Router();

router.use('/', require('./index'));
router.use('/authentification', require('./authentification'));

module.exports = router;