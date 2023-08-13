const router = require('express').Router();
const homeRoutes = require('./homeRoutes');

const express = require('express');
const app = express();
app.set('view-engine', 'ejs')


router.use('/', homeRoutes);

module.exports = router;
