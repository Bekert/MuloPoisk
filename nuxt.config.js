const { ProvidePlugin } = require('webpack')
import colors from 'vuetify/lib/util/colors'
import webpack from 'webpack'

module.exports = {
    mode: 'universal',
    head: {
        titleTemplate: 'MuloPoisk',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Meta description',
            },
        ],
        link: [
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Indie+Flower&display=swap',
            },
            {
                href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
                rel: 'stylesheet',
            },
        ],
    },
    css: ['@/assets/styles/global.sass', '@/assets/styles/_variables.sass'],
    plugins: [{ src: '@/plugins/localStorage.js', ssr: false }],
    buildModules: ['@nuxtjs/vuetify'],
    modules: ['@nuxtjs/style-resources', '@nuxtjs/axios', 'cookie-universal-nuxt'],
    styleResources: {
        sass: ['@/assets/styles/_variables.sass'],
    },
    vuetify: {
        theme: {
            themes: {
                light: {
                    primary: colors.lightBlue.lighten2,
                    secondary: colors.deepPurple.lighten2,
                    activePrimary: colors.lightBlue.lighten1,
                    activeText: colors.red.lighten1,
                },
            },
        },
    },
    server: {
        port: 3000,
        host: '0.0.0.0',
    },
    pageTransition: { name: 'slide-x-transition', mode: 'out-in' },
}
