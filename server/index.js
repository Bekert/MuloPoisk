const { loadNuxt, build } = require('nuxt')
const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const mongoose = require('mongoose')
require('dotenv').config()
// const cors = require('cors')

const app = express()

const isDev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000

async function start() {
    // different app uses
    app.use(bodyParser.urlencoded({ extended: false }))

    app.use(bodyParser.json())

    // require nuxt
    const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

    app.use(nuxt.render)

    if (isDev) {
        build(nuxt)
    }

    // start server
    app.listen(port, '0.0.0.0')
    console.log('Server listening on `localhost:' + port + '`.')
}

start()
