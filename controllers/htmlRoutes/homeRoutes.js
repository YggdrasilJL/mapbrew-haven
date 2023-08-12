const router = require('express').Router();

// the root url
router.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, '../public/index.html'));
  res.send('hello world')
});

// mapbuilder page
router.get('/map', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/html/mapBuilder.html'));
});

// login page
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/html/login.html'));
});

// faq page
router.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/html/faq.html'));
});

// send random strings to 404 path
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/html/404.html'));
});

module.exports = router;
