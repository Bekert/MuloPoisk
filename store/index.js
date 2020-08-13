export const actions = {
    async login(user) {
        let res = await this.$axios.post(
            'http://localhost:3000/api/users/login',
            user
        )
        if (res.data.success) {
            const token = res.data.token
            const user = res.data.user
            this.$cookies.set('token', token)
        }
        return res
    },
    async register({ dispatch }, user) {
        let res = await this.$axios.post(
            'http://localhost:3000/api/users/register',
            user
        )
        if (res.data.success) {
            await dispatch('login', {
                email: user.email,
                password: user.password,
            })
        }
    },
    logout() {
        this.$cookies.remove('token')
        return
    },
    async hahaha(token) {
        const res = await this.$axios.get(
            'http://localhost:3000/api/users/profile',
            { headers: { 'Authorization': `Bearer ${token}` } }
        )
        return res
    },
}
