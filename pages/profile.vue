<template>
    <div>
        <v-col cols="12" sm="6" class="ma-auto">
            <v-list>
                <v-list-item>
                    <v-list-item-title>Настройки:</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-text-field placeholder="Никнейм"></v-text-field>
                </v-list-item>
                <v-list-item>
                    <v-text-field placeholder="Почта"></v-text-field>
                </v-list-item>
            </v-list>
        </v-col>
    </div>
</template>

<script>
import cookie from "just-cookie"
export default {
    data: () => ({}),
    mounted() {
        console.log(Cookie.get("pepega"))
        Cookie.get
    },
}
</script>
