const router = require('express').Router();
const htmlRoutes = require('./htmlRoutes')
const apiRoutes = require('./apiRoutes');

router.use('/', htmlRoutes)
router.use('/api', apiRoutes)

// send 404 path here '*'

module.exports = router;
