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
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-card>
                <v-list v-if="!reg">
                    <v-list-item>
                        <v-list-item-title>Вход</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-text-field
                            v-model="username"
                            :rules="nameRules"
                            :error-messages="usernameError"
                            placeholder="Никнейм"
                        ></v-text-field>
                    </v-list-item>
                    <v-list-item>
                        <v-text-field
                            v-model="password"
                            :rules="passwordRules"
                            :error-messages="passwordError"
                            placeholder="Пароль"
                        ></v-text-field>
                    </v-list-item>
                </v-list>
                <v-list v-else-if="reg">
                    <v-list-item>
                        <v-list-item-title>Регистрация</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-text-field
                            v-model="username"
                            :rules="nameRules"
                            placeholder="Придумайте никмейм"
                        ></v-text-field>
                    </v-list-item>
                    <v-list-item>
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            placeholder="Напишите свой email"
                        ></v-text-field>
                    </v-list-item>
                    <v-list-item>
                        <v-text-field
                            v-model="password"
                            :rules="passwordRules"
                            placeholder="Придумайте пароль"
                        ></v-text-field>
                    </v-list-item>
                    <v-list-item>
                        <v-text-field
                            v-model="confirmPassword"
                            :rules="confirmPasswordRules"
                            placeholder="Повторите пароль"
                        ></v-text-field>
                    </v-list-item>
                </v-list>
                <v-card-actions v-if="!reg">
                    <v-btn @click="loginUser" color="primary">Войти</v-btn>
                    <v-btn @click="reg = true" color="secondary" dark
                        >Регистрация</v-btn
                    >
                </v-card-actions>
                <v-card-actions v-else-if="reg">
                    <v-btn
                        :disabled="!valid"
                        @click="registerNewAccount"
                        color="secondary"
                        block
                        >Создать аккаунт</v-btn
                    >
                </v-card-actions>
            </v-card>
        </v-form>
    </v-menu>
</template>

<script>
export default {
    data() {
        return {
            auth: false,
            reg: false,
            valid: false,
            usernameError: '',
            passwordError: '',
            username: '',
            nameRules: [v => !!v || 'Введите ваш никнейм'],
            password: '',
            passwordRules: [v => !!v || 'Введите пароль'],
            email: '',
            emailRules: [v => !!v || 'Введите email'],
            confirmPassword: '',
            confirmPasswordRules: [
                v => v === this.password || 'Пароли не совпадают',
            ],
        }
    },
    mounted() {
        this.auth = this.$store.getters['isLogged']
    },
    methods: {
        loginUser() {
            this.usernameError = ''
            this.passwordError = ''
            if (this.$refs.form.validate()) {
                const user = {
                    username: this.username,
                    password: this.password,
                }
                this.$store
                    .dispatch('login', user)
                    .then(res => {
                        this.auth = this.$store.getters['isLogged']
                        this.username = ''
                        this.password = ''
                    })
                    .catch(err => {
                        const msg = err.response.data.msg

                        if (msg == 'Данный пользователь не найден') {
                            this.usernameError = 'Неправильный никнейм'
                        }
                        if (msg == 'Неверный пароль') {
                            this.passwordError = 'Неправильный пароль'
                        }
                    })
            }
        },
        registerNewAccount() {
            if (this.$refs.form.validate()) {
                const user = {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    confirm_password: this.confirmPassword,
                }
                this.$store
                    .dispatch('register', user)
                    .then(res => {
                        this.auth = this.$store.getters['isLogged']
                        this.username = ''
                        this.email = ''
                        this.password = ''
                        this.confirmPassword = ''
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
        logout() {
            this.$store.dispatch('logout')
            this.auth = this.$store.getters['isLogged']
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
