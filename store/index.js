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
    auth_success(state, token, user) {
        state.token = token
        state.user = user
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
            commit('auth_success', token, user)
        }
        return res
    },
    logout({ commit }) {
        localStorage.removeItem('token')
        commit('logout')
        delete this.$axios.defaults.headers.common['Authorization']
        return
    },
}
