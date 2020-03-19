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
                    class="pt-8 pl-8 title-name" 
                    :class="{
                        'display-2': $vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl,
                        'headline': $vuetify.breakpoint.xs || $vuetify.breakpoint.sm
                    }"
                    style="cursor: pointer"
                    @click="$router.push('./Joker')"
                >Джокер</div>
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
