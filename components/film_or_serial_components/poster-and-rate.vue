<template>
    <div>
        <v-row class="ma-0 pa-0">
            <v-col cols="10" sm="12" xl="8" class="ma-auto">
                <v-img src="/img/films-posters/Joker.jpg"></v-img>
            </v-col>
        </v-row>
        <v-row class="ma-0 pa-0">
            <div class="ma-auto text-center">
                <div class="display-1">Джокер</div>
                <div class="subtitle-1 font-weight-light">Joker</div>
            </div>
        </v-row>
        <v-row class="ma-0 pa-0">
            <div class="ma-auto d-flex">
                <div class="green--text">
                    <div class="d-inline display-3">8.44</div>
                    <div class="grey--text d-inline display-1">/</div>
                    <div class="d-inline headline">1564</div>
                </div>
                <div class="ml-2">
                    <v-menu offset-x :offset-y="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"  close-on-content-click>
                        <template v-slot:activator="{ on }">
                            <v-btn text class="rate-btn" v-on="on" height="100%">
                                <div class="grey--text d-inline headline">Моя оценка:</div>
                                <div class="d-inline display-1 ml-2" :style="{color: color}">{{rate}}</div>
                            </v-btn>
                        </template>
                        <v-card color="white" class="pa-2" elevation="0" >
                            <div class="d-flex flex-column-reverse" >
                                <div v-for="n in 10" :key="n" class="d-flex" @click="rate = n; getColor()" style="cursor: pointer">
                                    <v-btn 
                                        class="ml-2 mt-2 title mr-2" 
                                        dark 
                                        :class="{green: n >= 7, orange: n < 7 && n > 3, red: n <= 3}" 
                                        x-small 
                                        fab
                                    >{{n}}</v-btn>
                                    <v-icon v-for="pepega in n" :key="pepega" small>star</v-icon>
                                </div>
                            </div>
                        </v-card>
                    </v-menu>
                </div>
            </div>
        </v-row>
    </div>
</template>

<script>
export default {
    data: () => ({
        rate: '3',
        color: ''
    }),
    mounted() {
        this.getColor()
    },
    methods: {
        getColor() {
            if (this.rate >= 7) {
                this.color = '#4CAF50'
            }
            else if (this.rate < 7 && this.rate > 3) {
                this.color = '#FF9800'
            }
            else {
                this.color = '#F44336'
            }
        }
    }
    
}
</script>

<style lang="sass" scoped>
    .rate-btn
        text-transform: none
        transition: 0.5s !important
        &:hover 
            background-color: rgba(0, 0, 0, 0.1)
</style>