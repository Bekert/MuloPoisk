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

module.exports = router
