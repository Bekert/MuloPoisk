<template>
    <div>
        <v-col cols="12" sm="6" class="ma-auto">
            <v-list>
                <v-list-item>
                    <v-list-item-title>Настройки:</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-text-field placeholder="Никнейм" :value="user.username"></v-text-field>
                </v-list-item>
                <v-list-item>
                    <v-text-field placeholder="Почта" :value="user.email"></v-text-field>
                </v-list-item>
            </v-list>
        </v-col>
    </div>
</template>

<script>
export default {
    async asyncData({ app, redirect, $axios }) {
        try {
            const res = await $axios.get(
                'http://localhost:3000/api/users/profile',
                {
                    headers: {
                        Authorization: `Bearer ${app.$cookies.get('token')}`,
                    },
                }
            )
            return { user: res.data.user }
        } catch {
            redirect('/')
        }
    },
    data: () => ({}),
    mounted() {
        console.log(this.user)
    },
}
</script>
