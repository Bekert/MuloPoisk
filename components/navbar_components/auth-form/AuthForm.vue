<template>
    <div>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-card elevation="0" style="border-radius: 0" :color="color">
                <TheAuthFormLogin
                    v-if="!reg"
                    :renewAuth="renewAuth"
                    :renewRegStatus="renewRegStatus"
                    :checkValid="checkValid"
                    :emailRules="emailRules"
                    :passwordRules="passwordRules"
                    :valid="valid"
                />
                <TheAuthFormRegister
                    v-else-if="reg"
                    :renewAuth="renewAuth"
                    :renewRegStatus="renewRegStatus"
                    :checkValid="checkValid"
                    :emailRules="emailRules"
                    :passwordRules="passwordRules"
                    :valid="valid"
                />
            </v-card>
        </v-form>
    </div>
</template>

<script>
import TheAuthFormLogin from './TheAuthFormLogin'
import TheAuthFormRegister from './TheAuthFormRegister'
export default {
    props: ['color', 'renewAuthStatus'],
    components: {
        TheAuthFormLogin,
        TheAuthFormRegister,
    },
    data() {
        return {
            valid: false,
            reg: false,
            emailRegexp: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
            oneLowercaseCharacterRegexp: /(?=.*[a-z])/,
            oneUppercaseCharacterRegexp: /(?=.*[A-Z])/,
            oneNumericCharacterRegexp: /(?=.*[0-9])/,
            emailRules: [
                v => !!v || 'Введите email',
                v => this.emailRegexp.test(v) || "Неверный формат email'a",
            ],
            passwordRules: [
                v => !!v || 'Введите пароль',
                v => v.length >= 6 || 'Мин. длина пароля 6 символов',
                v =>
                    this.oneLowercaseCharacterRegexp.test(v) ||
                    'Нет ни одной строчной буквы',
                v =>
                    this.oneUppercaseCharacterRegexp.test(v) ||
                    'Нет ни одной заглавной буквы',
                v =>
                    this.oneNumericCharacterRegexp.test(v) ||
                    'Нет ни одной цифры',
            ],
        }
    },
    methods: {
        renewAuth() {
            this.renewAuthStatus()
        },
        renewRegStatus() {
            this.reg = !this.reg
        },
        checkValid() {
            return this.$refs.form.validate()
        },
    },
}
</script>
