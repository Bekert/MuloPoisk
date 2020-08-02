<template>
    <div>
        <v-list>
            <v-list-item>
                <v-list-item-title>Регистрация</v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-text-field
                    v-model="username"
                    :rules="nameRules"
                    :error-messages="usernameError"
                    @input="usernameError = ''"
                    placeholder="Придумайте никмейм"
                ></v-text-field>
            </v-list-item>
            <v-list-item>
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    :error-messages="emailError"
                    @input="emailError = ''"
                    placeholder="Напишите свой email"
                ></v-text-field>
            </v-list-item>
            <v-list-item>
                <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    :error-messages="passwordError"
                    @input="passwordError = ''"
                    placeholder="Придумайте пароль"
                ></v-text-field>
            </v-list-item>
            <v-list-item>
                <v-text-field
                    v-model="confirmPassword"
                    :rules="confirmPasswordRules"
                    :error-messages="confirmPasswordError"
                    @input="confirmPasswordError = ''"
                    placeholder="Повторите пароль"
                ></v-text-field>
            </v-list-item>
        </v-list>
        <v-card-actions>
            <v-btn color="red" @click="renewRegStatus"
                ><v-icon color="white">keyboard_arrow_left</v-icon></v-btn
            >
            <v-btn
                @click="registerNewAccount"
                color="secondary"
                :disabled="!valid"
                >Создать аккаунт</v-btn
            >
        </v-card-actions>
    </div>
</template>

<script>
export default {
    props: [
        'emailRules',
        'passwordRules',
        'renewAuth',
        'checkValid',
        'renewRegStatus',
        'valid',
    ],
    data() {
        return {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            usernameError: '',
            emailError: '',
            passwordError: '',
            confirmPasswordError: '',
            nameRules: [
                v => !!v || 'Введите никнейм',
                v => v.length > 6 || 'Мин. длина ника 6 символов',
            ],
            confirmPasswordRules: [
                v => !!v || 'Подтвердите пароль',
                v => v === this.password || 'Пароли не совпадают',
            ],
        }
    },
    methods: {
        registerNewAccount() {
            if (this.checkValid) {
                const user = {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    confirm_password: this.confirmPassword,
                }
                this.$store
                    .dispatch('register', user)
                    .then(res => {
                        this.renewAuth()
                        this.username = ''
                        this.email = ''
                        this.password = ''
                        this.confirmPassword = ''
                    })
                    .catch(err => {
                        const msg = err.response.data.msg
                        const type = err.response.data.contentType

                        if (type === 'username') {
                            this.usernameError = msg
                        } else if (type === 'email') {
                            this.emailError = msg
                        } else if (type === 'password') {
                            this.passwordError = msg
                        } else if (type === 'confirm_password') {
                            this.confirmPasswordError = msg
                        } else {
                            console.log(msg)
                        }
                    })
            }
        },
    },
}
</script>
