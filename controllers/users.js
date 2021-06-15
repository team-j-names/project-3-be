const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/user');
const { createUserToken } = require('../middleware/auth')

router.post('/signup', async (req, res, next) => {
    try {
        const email = req.body.email;
        const password = await bcrypt.hash(req.body.password, 11);
        const user = await User.create({ email, password });
        res.status(201).json(user);
    } catch (error) {
        return next(error);
    }
})

router.post('/signin', (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then((user) => createUserToken(req, user))
        .then((token) => res.json({ token }))
        .catch(next);
});

module.exports = router;