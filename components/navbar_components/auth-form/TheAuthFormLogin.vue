<template>
    <div>
        <v-list>
            <v-list-item>
                <v-list-item-title>Вход</v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    :error-messages="emailError"
                    placeholder="Email"
                    @input="emailError = ''"
                ></v-text-field>
            </v-list-item>
            <v-list-item>
                <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    :error-messages="passwordError"
                    placeholder="Пароль"
                    @input="passwordError = ''"
                ></v-text-field>
            </v-list-item>
        </v-list>
        <v-card-actions>
            <v-btn :disabled="!valid" @click="loginUser" color="primary"
                >Войти</v-btn
            >
            <v-btn @click="renewRegStatus" color="secondary" dark
                >Регистрация</v-btn
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
        'renewRegStatus',
        'checkValid',
        'validatorign',
        'valid',
    ],
    data: () => ({
        email: '',
        password: '',
        emailError: '',
        passwordError: '',
    }),
    methods: {
        loginUser() {
            this.emailError = ''
            this.passwordError = ''
            if (this.checkValid) {
                const user = {
                    email: this.email,
                    password: this.password,
                }
                this.$store
                    .dispatch('login', user)
                    .then(res => {
                        this.renewAuth()
                        this.email = ''
                        this.password = ''
                    })
                    .catch(err => {
                        const msg = err.response.data.msg
                        const type = err.response.data.contentType

                        if (type === 'email') {
                            this.emailError = msg
                        } else if (type === 'password') {
                            this.passwordError = msg
                        } else {
                            console.log(msg)
                        }
                    })
            }
        },
    },
}
</script>
