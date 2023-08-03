const router = require('express').Router();
const { v4: uuid } = require('uuid');
const bcrypt = require('bcrypt');
const User = require('../../models/User');

router.post('/register', async (req, res) => {
  try {
    const { first_name, last_name, user_name, email, password } = req.body;
    const hashedPw = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      id: uuid(),
      user_name,
      email,
      password: hashedPw,
    });

    res.status(201).json({ message: 'User registered.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error registering User.' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { user_name, password } = req.body;

    const user = await User.findOne({
      where: user_name,
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({ message: 'Now logged in:', user });
    } else {
      res.status(401).json({ message: 'Invalid username or password.' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error logging in' });
  }
});

module.exports = router;
