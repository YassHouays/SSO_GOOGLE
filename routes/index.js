const router = require('express').Router();


/* GET home page. */
router.get('/', async function(req, res, next) {
	res.send('index')
});

module.exports = router;
