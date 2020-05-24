<template>
    <v-menu
        offset-x
        :offset-y="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
        close-on-content-click
    >
        <template v-slot:activator="{ on }">
            <v-btn text class="rate-btn" v-on="on" height="100%">
                <div class="grey--text d-inline subtitle-1">Моя оценка:</div>
                <div
                    class="d-inline headline ml-1"
                    :style="{ color: myRateColor }"
                >
                    {{ myRate }}
                </div>
            </v-btn>
        </template>
        <v-card color="white" class="pa-2" elevation="0">
            <div class="d-flex flex-column-reverse">
                <div
                    v-for="n in 10"
                    :key="n"
                    class="d-flex"
                    @click="
                        myRate = n
                        myRateColor = getColor(myRate)
                    "
                    style="cursor: pointer"
                >
                    <v-btn
                        class="ml-2 mt-2 title mr-2"
                        dark
                        :class="{
                            green: n >= 7,
                            orange: n < 7 && n > 3,
                            red: n <= 3,
                        }"
                        x-small
                        fab
                        >{{ n }}</v-btn
                    >
                    <v-icon v-for="pepega in n" :key="pepega" small
                        >star</v-icon
                    >
                </div>
            </div>
        </v-card>
    </v-menu>
</template>

<script>
export default {
    props: ["myRate"],
    data: () => ({
        myRateColor: "",
    }),
    mounted() {
        this.myRateColor = this.getColor(this.myRate)
    },
    methods: {
        getColor(typeRate) {
            if (typeRate >= 7) {
                return "#4CAF50"
            } else if (typeRate < 7 && typeRate > 3) {
                return "#FF9800"
            } else if (typeRate <= 3) {
                return "#F44336"
            } else {
                return "#9E9E9E"
            }
        },
    },
}
</script>

<style lang="sass" scoped>
.rate-btn
    text-transform: none
    transition: 0.5s !important
    &:hover
        background-color: rgba(0, 0, 0, 0.1)
</style>
