<template>
  <div>
    <v-list class="pa-0" key="account-menu" v-if="auth">
      <v-list-item @click>
        <v-list-item-avatar>
          <v-img src="/img/account-image.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-title>CitRUS_Prod</v-list-item-title>
      </v-list-item>
      <v-list-item class="pl-50" @click>
        <v-list-item-icon class="mr-1">
          <v-icon>library_books</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Моя коллекция</v-list-item-title>
      </v-list-item>
      <v-list-item class="pl-50" @click>
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

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-card color="activePrimary" elevation="0" v-if="!auth">
        <v-list v-if="!reg">
          <v-list-item>
            <v-list-item-title>Вход</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-text-field v-model="name" :rules="nameRules" placeholder="Никнейм"></v-text-field>
          </v-list-item>
          <v-list-item>
            <v-text-field v-model="password" :rules="passwordRules" placeholder="Пароль"></v-text-field>
          </v-list-item>
        </v-list>
        <v-list v-else-if="reg">
          <v-list-item>
            <v-list-item-title>Регистрация</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-text-field v-model="name" :rules="nameRules" placeholder="Придумайте никмейм"></v-text-field>
          </v-list-item>
          <v-list-item>
            <v-text-field v-model="password" :rules="passwordRules" placeholder="Придумайте пароль"></v-text-field>
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
          <v-btn :disabled="!valid" @click="login" color="primary">Войти</v-btn>
          <v-btn @click="reg = true" color="secondary" dark>Регистрация</v-btn>
        </v-card-actions>
        <v-card-actions v-else-if="reg">
          <v-btn
          :disabled="!valid"
          @click="registerNewAccount"
          color="secondary"
          block
        >Создать аккаунт</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      auth: true,
      reg: false,
      valid: false,
      name: "",
      nameRules: [v => !!v || "Введите ваш никнейм"],
      password: "",
      passwordRules: [v => !!v || "Введите пароль"],
      passwordReg: "",
      passwordRegRules: [v => v === this.password || "Пароли не совпадают"]
    };
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        this.auth = true;
        const user = {
          name: this.name
        };
        this.password = "";
        this.name = "";
      }
    },
    registerNewAccount() {
      if (this.$refs.form.validate()) {
        this.auth = true;
        const newUser = {
          name: this.name,
          password: this.password
        };
        this.password = "";
        this.regPassword = "";
        this.name = "";
      }
    },
    logout() {
      this.auth = false;
    }
  }
};
</script>

<style lang="sass" scoped>
    .pl-50
      padding-left: 50px
</style>