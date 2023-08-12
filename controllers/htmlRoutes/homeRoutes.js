const router = require('express').Router();
const { User } = require('../../models');
const withauth = require('../../utils/auth');


 //login page
router.get('/', withauth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }))

    res.render('homepage', {
      users,
     logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// faq page
router.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/html/faq.html'));
});

// send random strings to 404 path
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/html/404.html'));
});

// mapbuilder page
router.get('/map', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/html/mapBuilder.html'));
});

module.exports = router;
