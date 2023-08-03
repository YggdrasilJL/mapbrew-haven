const router = require('express').Router();
const homeRoutes = require('./')

router.use('/', homeRoutes)

module.exports = router;
