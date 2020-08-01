const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const passport = require('passport')

router.post('/register', async (req, res) => {
    if (!req.body.username) {
        return res.status(400).json({
            msg: 'Введите имя пользователя',
        })
    } else if (!req.body.email) {
        return res.status(400).json({
            msg: 'Введите почту',
        })
    } else if (!req.body.password) {
        return res.status(400).json({
            msg: 'Введите пароль',
        })
    } else if (!req.body.confirm_password) {
        return res.status(400).json({
            msg: 'Подвердите пароль',
        })
    }

    const { username, email, password, confirm_password } = req.body

    if (password !== confirm_password) {
        return res.status(400).json({
            msg: 'Пароли не совпадают',
        })
    }

    const userByName = await User.findOne({ username })

    if (userByName) {
        return res.status(400).json({
            msg: 'Такой ник уже занят',
        })
    }

    const userByEmail = await User.findOne({ email })

    if (userByEmail) {
        return res.status(400).json({
            msg: 'Email уже занят',
        })
    }

    const newUser = new User({
        username,
        password,
        email,
    })

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, async (err, hash) => {
            if (err) {
                console.log(err)
                return res.status(400).json({
                    msg: 'Ошибка',
                })
            }
            newUser.password = hash
            await newUser.save()
            return res.status(201).json({
                success: true,
                msg: 'Новый пользователь зарегистрован',
            })
        })
    })
})

router.post('/login', (req, res) => {
    const { username, password } = req.body

    if (!username) {
        return res.status(400).json({
            msg: 'Введите имя пользователя',
        })
    } else if (!password) {
        return res.status(400).json({
            msg: 'Введите пароль',
        })
    }

    User.findOne({ username }).then(user => {
        if (!user) {
            return res.status(404).json({
                msg: 'Данный пользователь не найден',
                success: false,
            })
        }
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = {
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                }
                jwt.sign(
                    payload,
                    process.env.SECRET_KEY,
                    { expiresIn: 604800 },
                    (err, token) => {
                        res.status(200).json({
                            success: true,
                            user: user,
                            token: `Bearer ${token}`,
                            msg: 'Вы вошли',
                        })
                    }
                )
            } else {
                return res.status(404).json({
                    msg: 'Неверный пароль',
                    success: false,
                })
            }
        })
    })
})

router.get(
    '/profile',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        return res.json({
            user: req.user,
        })
    }
)

module.exports = router
