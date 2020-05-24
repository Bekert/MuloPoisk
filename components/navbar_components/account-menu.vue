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
                >CitRUS_Prod
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
                            v-model="name"
                            :rules="nameRules"
                            placeholder="Никнейм"
                        ></v-text-field>
                    </v-list-item>
                    <v-list-item>
                        <v-text-field
                            v-model="password"
                            :rules="passwordRules"
                            placeholder="Пароль"
                        ></v-text-field>
                    </v-list-item>
                </v-list>
                <v-list v-else-if="reg">
                    <v-list-item>
                        <v-list-item-tile>Регистрация</v-list-item-tile>
                    </v-list-item>
                    <v-list-item>
                        <v-text-field
                            v-model="name"
                            :rules="nameRules"
                            placeholder="Придумайте никмейм"
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
                            v-model="passwordReg"
                            :rules="passwordRegRules"
                            placeholder="Повторите пароль"
                        ></v-text-field>
                    </v-list-item>
                </v-list>
                <v-card-actions v-if="!reg">
                    <v-btn :disabled="!valid" @click="login" color="primary"
                        >Войти</v-btn
                    >
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
            auth: true,
            reg: false,
            valid: false,
            name: "",
            nameRules: [(v) => !!v || "Введите ваш никнейм"],
            password: "",
            passwordRules: [(v) => !!v || "Введите пароль"],
            passwordReg: "",
            passwordRegRules: [
                (v) => v === this.password || "Пароли не совпадают",
            ],
        }
    },
    methods: {
        login() {
            if (this.$refs.form.validate()) {
                this.auth = true
                const user = {
                    name: this.name,
                }
                this.password = ""
                this.name = ""
            }
        },
        registerNewAccount() {
            if (this.$refs.form.validate()) {
                this.auth = true
                const newUser = {
                    name: this.name,
                    password: this.password,
                }
                this.password = ""
                this.regPassword = ""
                this.name = ""
            }
        },
        logout() {
            this.auth = false
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
