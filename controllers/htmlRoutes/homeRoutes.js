const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const withAuth = require('../../utils/auth');
const path = require('path');
const express = require('express');
const app = express();
app.set('view-engine', 'ejs');

// login page
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

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

  res.render('login.ejs');
});

router.get('/', (req, res) => {
  res.render('index.ejs');
});

router.get('/index', (req, res) => {
  res.render('index.ejs');
});

router.get('/mapbuilder', (req, res) => {
  res.render('mapbuilder.ejs');
});

router.get('/league', (req, res) => {
  res.render('league.ejs');
});

router.get('/faq', (req, res) => {
  res.render('faq.ejs');
});

router.get('*', (req, res) => {
  res.render('404.ejs');
});

module.exports = router;
