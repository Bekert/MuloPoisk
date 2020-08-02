<template>
    <v-menu
        content-class="no-border-radius"
        open-on-hover
        offset-y
        nudge-width="1"
        v-if="auth"
        key="user-menu"
    >
        <template v-slot:activator="{ on }">
            <v-btn
                v-on="on"
                class="mt-auto mb-auto ml-auto mr-4 btn-class"
                color="primary"
                tile
                height="48px"
                elevation="0"
                to="/profile"
            >
                <v-avatar
                    class="avatar-class mr-25"
                    max-height="40px"
                    max-width="40px"
                >
                    <v-img src="/img/account-image.jpg"></v-img> </v-avatar
                >{{ $store.state.user.username }}
            </v-btn>
        </template>
        <v-list color="primary" dark class="pa-0 no-border-radius">
            <v-list-item @click="$router.push('/collection')">
                <v-list-item-icon class="mr-1">
                    <v-icon>library_books</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Моя коллекция</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/collection?want-to-watch')">
                <v-list-item-icon class="mr-1">
                    <v-icon>bookmark</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Буду смотреть</v-list-item-title>
            </v-list-item>
            <v-list-item @click="logout">
                <v-list-item-icon class="mr-1">
                    <v-icon>close</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Выход</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
    <v-menu
        v-else-if="!auth"
        offset-y
        :close-on-content-click="auth"
        key="loginAndRegister-menu"
    >
        <template v-slot:activator="{ on }">
            <v-btn
                v-on="on"
                class="mt-auto mb-auto ml-auto mr-4"
                color="#29B6F6"
                elevation="0"
                dark
                >Вход</v-btn
            >
        </template>
        <AuthForm color="white" :renewAuthStatus="renewAuthStatus" />
    </v-menu>
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
            this.$store.dispatch('logout')
            this.auth = this.$store.getters.isLogged
        },
        renewAuthStatus() {
            this.auth = this.$store.getters.isLogged
        },
    },
}
</script>

<style lang="sass" scoped>
.no-border-radius
  border-radius: 0 !important
.btn-class
  text-transform: none
  font-weight: normal
.avatar-class
  min-width: 40px !important
.mr-25
  margin-right: 25px
</style>
