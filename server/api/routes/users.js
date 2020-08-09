const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const passport = require('passport')

router.post('/register', async (req, res) => {
    if (!req.body.username) {
        return res.status(400).json({
            msg: 'Введите никнейм',
            contentType: 'username',
            errorType: 'empty field',
        })
    } else if (!req.body.email) {
        return res.status(400).json({
            msg: 'Введите email',
            contentType: 'email',
            errorType: 'empty field',
        })
    } else if (!req.body.password) {
        return res.status(400).json({
            msg: 'Введите пароль',
            contentType: 'password',
            errorType: 'empty field',
        })
    } else if (!req.body.confirm_password) {
        return res.status(400).json({
            msg: 'Подвердите пароль',
            contentType: 'confirm_password',
            errorType: 'empty field',
        })
    }

    const { username, email, password, confirm_password } = req.body

    const emailRegexp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    const oneLowercaseCharacterRegexp = /(?=.*[a-z])/
    const oneUppercaseCharacterRegexp = /(?=.*[A-Z])/
    const oneNumericCharacterRegexp = /(?=.*[0-9])/

    if (!emailRegexp.test(email)) {
        return res.status(400).json({
            msg: "Неверный формат email'a",
            contentType: 'email',
            errorType: 'incorrect format',
        })
    }
    if (!username.length >= 6) {
        return res.status(400).json({
            msg: 'Мин. длина ника 6 символов',
            contentType: 'username',
            errorType: 'incorrect format',
        })
    }
    if (!password.length >= 6) {
        return res.status(400).json({
            msg: 'Мин. длина пароля 6 символов',
            contentType: 'password',
            errorType: 'incorrect format',
        })
    }
    if (!oneLowercaseCharacterRegexp.test(password)) {
        return res.status(400).json({
            msg: 'Нет ни одной строчной буквы',
            contentType: 'password',
            errorType: 'incorrect format',
        })
    }
    if (!oneUppercaseCharacterRegexp.test(password)) {
        return res.status(400).json({
            msg: 'Нет ни одной заглавной буквы',
            contentType: 'password',
            errorType: 'incorrect format',
        })
    }
    if (!oneNumericCharacterRegexp.test(password)) {
        return res.status(400).json({
            msg: 'Нет ни одной цифры',
            contentType: 'password',
            errorType: 'incorrect format',
        })
    }

    if (password !== confirm_password) {
        return res.status(400).json({
            msg: 'Пароли не совпадают',
            contentType: 'confirm_passpord',
            errorType: 'passpords mismatch',
        })
    }

    const userByName = await User.findOne({ username })

    if (userByName) {
        return res.status(400).json({
            msg: 'Такой никнейм уже занят',
            contentType: 'username',
            errorType: 'already taken',
        })
    }

    const userByEmail = await User.findOne({ email })

    if (userByEmail) {
        return res.status(400).json({
            msg: 'Такой email уже занят',
            contentType: 'email',
            errorType: 'already taken',
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
                    contentType: 'unknown',
                    errorType: 'unknown',
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
    const { email, password } = req.body

    if (!email) {
        return res.status(400).json({
            msg: 'Введите email',
            contentType: 'email',
            errorType: 'empty field',
        })
    } else if (!password) {
        return res.status(400).json({
            msg: 'Введите пароль',
            contentType: 'password',
            errorType: 'empty field',
        })
    }

    User.findOne({ email }).then(user => {
        if (!user) {
            return res.status(404).json({
                msg: 'Данный email не найден',
                contentType: 'email',
                errorType: 'not found',
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
                            token: token,
                            msg: 'Вы вошли',
                        })
                    }
                )
            } else {
                return res.status(404).json({
                    msg: 'Неверный пароль',
                    contentType: 'password',
                    errorType: 'incorrect',
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
