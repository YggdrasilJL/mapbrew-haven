const router = require('express').Router();
const { v4: uuid } = require('uuid');
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// get all users
router.get('/', async (req, res) => {
  const allUsers = await User.findAll();
  res.json(allUsers);
});
// get user by id
router.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
});

router.post('/register', async (req, res) => {
  try {
    console.log(req.body)
    const { user_name, email, password } = req.body;
    const hashedPw = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      id: uuid(),
      user_name,
      email,
      password: hashedPw,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      //might want to save user id if we want too
      req.session.user_id= newUser.id;
      // res.status(200).json({ message: 'User registered.' });
      return res.redirect('/index')
    })

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error registering User.' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { user_name, password } = req.body;

    const user = await User.findOne({
      where: { user_name },
    });

    if (!user) {
      res.status(400).json({ message: 'Invalid Credentials' });
      return;
    }

    const validPw = await user.checkPassword(password);

    if (!validPw) {
      res.status(400).json({ message: 'Invalid Credentials' });
      return;
    }

    req.session.loggedIn = true;
    req.session.save(() => {
      res.status(200).json({ user: user, message: "You're now logged in." });
      // Or redirect here
      res.redirect('/index');
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error logging in' });
    // Or redirect here
    res.redirect('/login');
  }
});

// router.post('/login', async (req, res) => {
//   try {
//     const { user_name, password } = req.body;

//     const user = await User.findOne({
//       where: { user_name },
//     });

//     if (!user) {
//       res.status(400).json({ message: 'Invalid Credentials' });
//       return;
//     }

//     const validPw = await user.checkPassword(password);

//     if (!validPw) {
//       res.status(400).json({ message: 'Invalid Credentials' });
//       return;
//     }
    
//     req.session.save(() => {
//     req.session.loggedIn = true;
//     return res.redirect('/index');
//     res.status(200).json({ user: user, message: "You're now logged in." });
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Error logging in' });
//     res.redirect('/login');
//   }
// });

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
