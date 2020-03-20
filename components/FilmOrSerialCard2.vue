<template>
    <v-card class="d-flex pa-2" elevation="0" outlined>
        <v-hover v-slot:default="{hover}">
            <v-card 
                :class="{'standard-elevation': hover}" 
                @click="$router.push('./Joker')"
            >
                <v-img 
                    src="/img/films-posters/Joker.jpg"
                    class="film-image" 
                    :class="{
                        maxImgSize: $vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl, 
                        maxImgSizeMob: $vuetify.breakpoint.xs || $vuetify.breakpoint.sm
                    }"
                >
                    <v-fade-transition>
                        <v-overlay opacity="0.5" absolute v-if="hover">
                            <v-icon color="orange" large>search</v-icon>
                        </v-overlay>
                    </v-fade-transition>
                </v-img>
            </v-card>
        </v-hover>

        <div class="d-flex justify-space-between" style="width: 100%">
            <div>
                <div 
                    class="pt-6 pl-6 title-name" 
                    :class="{
                        'display-2': $vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl,
                        'headline': $vuetify.breakpoint.xs || $vuetify.breakpoint.sm
                    }"
                    style="cursor: pointer"
                    @click="$router.push('./Joker')"
                >Джокер</div>
                <v-card elevation="0" max-width="600" max-height="140" v-if="!$vuetify.breakpoint.xs">
                    <v-row class="ma-0 pa-0 ml-6 mt-2" v-if="!$vuetify.breakpoint.xs">
                        <v-card color="amber" height="40" elevation="0" class="mr-2" :class="{'mt-2': !$vuetify.breakpoint.xl}">
                            <v-card-text class="pa-2">Криминал</v-card-text>
                        </v-card>
                        <v-card color="amber" height="40" elevation="0" class="mr-2" :class="{'mt-2': !$vuetify.breakpoint.xl}">
                            <v-card-text class="pa-2">Драма</v-card-text>
                        </v-card>
                        <v-card color="amber" height="40" elevation="0" class="mr-2" :class="{'mt-2': !$vuetify.breakpoint.xl}">
                            <v-card-text class="pa-2">Триллер</v-card-text>
                        </v-card>
                        <v-card color="light-green" dark height="40" elevation="0" class="mr-2" :class="{'mt-2': !$vuetify.breakpoint.xl}" v-if="!$vuetify.breakpoint.sm"
                        >
                            <v-card-text class="pa-2">ТОП 250</v-card-text>
                        </v-card>
                        <v-card color="light-green" dark height="40" elevation="0" :class="{'mt-2': !$vuetify.breakpoint.xl}" v-if="!$vuetify.breakpoint.sm">
                            <v-card-text class="pa-2">Онлайн: 3</v-card-text>
                        </v-card>
                    </v-row>
                    <v-row class="pa-0 ma-0" v-if="$vuetify.breakpoint.xl">
                        <v-card color="green" dark class="mx-6 mt-2">
                            <v-card-title class="pa-0 pl-4 pt-2">Случайная рецензия:</v-card-title>
                            <v-card-text class="">such as those seen with a v-menu and v-tooltip attached to the same activator button, need a particular setup in order to function correctly. Note: this same syntax is used for other nested activators such as v-dialog w/ v-tooltip.</v-card-text>
                        </v-card>
                    </v-row>
                </v-card>
                <div v-if="$vuetify.breakpoint.xs" class="mt-4">
                    <Rate :rate="rate" :rateValue="rateValue" class="ml-4"/>
                    <MyRate :myRate="myRate"/>
                    <div class="ml-4">Дата выхода: 12.20.2020</div>
                </div>
            </div>
            <div class="d-flex" v-if="!$vuetify.breakpoint.xs">
                <div class="d-flex justify-center item-width">
                    <div class="my-auto">
                        <MyRate :myRate="myRate"/>
                    </div>
                </div>
                <div class="d-flex align-center justify-center border item-width my-8" :class="{'item-width-mob-rate': $vuetify.breakpoint.xs || $vuetify.breakpoint.sm}">
                    <Rate :rate="rate" :rateValue="rateValue" :column="true"/>
                </div>
                <div 
                    style="font-size: 20px" 
                    class="d-flex align-center justify-center item-width" 
                    :class="{'item-width-mob-date pl-2': $vuetify.breakpoint.xs || $vuetify.breakpoint.sm}"
                >12.20.2020</div>
            </div>
        </div>
    </v-card>
</template>

<script>
import MyRate from './rate-components/MyRate'
import Rate from './rate-components/Rate'
export default {
    components: {
        MyRate, Rate
    },
    data: () => ({
        rate: 8.22,
        myRate: 6,
        rateValue: 1589
    })
}
</script>

<style lang="sass" scoped>
    .maxImgSize
        width: 190px
        height: 270px
        max-width: 190px
        max-height: 270px
    .maxImgSizeMob
        width: 150px
        height: 220px
        max-width: 150px
        max-height: 220px
    .item-width
        width: 150px
    .item-width-mob-rate
        width: 80px !important
    .item-width-mob-date
        width: 100px !important
    .border
        border-right: 1px solid rgba(0, 0, 0, 0.2)
        border-left: 1px solid rgba(0, 0, 0, 0.2)
    .title-name
        &:hover 
            color: #EF5350
    .standard-elevation
        box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)
</style>
