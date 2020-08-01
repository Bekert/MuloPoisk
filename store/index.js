export const state = () => ({
    token: '',
    user: {},
    status: '',
})

export const getters = {
    isLogged: state => !!state.token,
    authStatus: state => state.status,
    user: state => state.user,
}

export const mutations = {
    login_success(state, params) {
        state.token = params[0]
        state.user = params[1]
        state.status = 'success'
    },
    logout(state) {
        state.status = ''
        state.user = ''
        state.token = ''
    },
}

export const actions = {
    async login({ commit }, user) {
        let res = await this.$axios.post(
            'http://localhost:3000/api/users/login',
            user
        )
        if (res.data.success) {
            const token = res.data.token
            const user = res.data.user
            localStorage.setItem('token', token)
            this.$axios.defaults.headers.common['Authorization'] = token
            commit('login_success', [token, user])
        }
        return res
    },
    async register({ commit, dispatch }, user) {
        let res = await this.$axios.post(
            'http://localhost:3000/api/users/register',
            user
        )
        if (res.data.success) {
            await dispatch('login', {
                username: user.username,
                password: user.password,
            })
        }
    },
    logout({ commit }) {
        localStorage.removeItem('token')
        commit('logout')
        delete this.$axios.defaults.headers.common['Authorization']
        return
    },
}
