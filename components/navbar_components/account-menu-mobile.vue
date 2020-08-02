<template>
    <div>
        <v-list class="pa-0" key="account-menu" v-if="auth">
            <v-list-item @click="$router.push('/profile')">
                <v-list-item-avatar>
                    <v-img src="/img/account-image.jpg"></v-img>
                </v-list-item-avatar>
                <v-list-item-title>CitRUS_Prod</v-list-item-title>
            </v-list-item>
            <v-list-item class="pl-50" @click="$router.push('/collection')">
                <v-list-item-icon class="mr-1">
                    <v-icon>library_books</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Моя коллекция</v-list-item-title>
            </v-list-item>
            <v-list-item
                class="pl-50"
                @click="$router.push('/collection?want-to-watch')"
            >
                <v-list-item-icon class="mr-1">
                    <v-icon>bookmark</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Буду смотреть</v-list-item-title>
            </v-list-item>
            <v-list-item @click="logout" class="pl-50">
                <v-list-item-icon class="mr-1">
                    <v-icon>close</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Выход</v-list-item-title>
            </v-list-item>
        </v-list>

        <AuthForm :renewAuthStatus="renewAuthStatus" color="activePrimary" />
    </div>
</template>

<script>
import AuthForm from './auth-form/AuthForm'
export default {
    data() {
        return {
            auth: false,
        }
    },
    components: {
        AuthForm,
    },
    mounted() {
        this.renewAuthStatus()
    },
    methods: {
        logout() {
            this.auth = false
        },
        renewAuthStatus() {
            this.auth = this.$store.getters['isLogged']
        },
    },
}
</script>

<style lang="sass" scoped>
.pl-50
  padding-left: 50px
</style>
