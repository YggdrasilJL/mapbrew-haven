const router = require('express').Router();
const path = require('path');
const htmlRoutes = require('./htmlRoutes');
const apiRoutes = require('./apiRoutes');


const express = require('express');
const app = express();
app.set('view-engine', 'ejs')





router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;
