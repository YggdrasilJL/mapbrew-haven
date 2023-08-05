const router = require('express').Router();
const { v4: uuid } = require('uuid');
const bcrypt = require('bcrypt');
const User = require('../../models/UserCreations');

// get user by id 
router.get('/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.json(user)
  });

