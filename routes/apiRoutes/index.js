const router = require('express').Router();

const mapRoutes = require('./mapRoutes');
const userRoutes = require('./userRoutes');

router.use('/map', mapRoutes)
router.use('/user', userRoutes)

module.exports = router;
