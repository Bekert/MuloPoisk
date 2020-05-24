<template>
    <v-hover v-slot:default="{ hover }">
        <v-card
            :class="{
                maxCardWidth:
                    $vuetify.breakpoint.md ||
                    $vuetify.breakpoint.lg ||
                    $vuetify.breakpoint.xl,
                maxCardWidthMob:
                    $vuetify.breakpoint.xs || $vuetify.breakpoint.sm,
            }"
            class="mt-2 mb-2"
            elevation="0"
            style="cursor: pointer"
            @click="$router.push(`/${routeName}`)"
        >
            <v-card
                :class="{ 'standard-elevation': hover }"
                min-width="150"
                min-height="220"
            >
                <v-img
                    :src="'/img/films-posters/' + src"
                    class="film-image"
                    :class="{
                        maxImgSize:
                            $vuetify.breakpoint.md ||
                            $vuetify.breakpoint.lg ||
                            $vuetify.breakpoint.xl,
                        maxImgSizeMob:
                            $vuetify.breakpoint.xs || $vuetify.breakpoint.sm,
                    }"
                ></v-img>
                <v-fade-transition>
                    <v-overlay opacity="0.5" absolute v-if="hover">
                        <v-icon color="orange" large>search</v-icon>
                    </v-overlay>
                </v-fade-transition>
            </v-card>
            <div class="text-center film-text" style="position: relative">
                <div
                    class="subtitle-1 film-name mt-1"
                    :class="{ 'red-lighten-1': hover }"
                >
                    {{ name }}
                </div>
                <div
                    class="rate subtitle-2 standard-elevation"
                    :style="{ 'background-color': color }"
                    :class="{
                        rateSpacing:
                            $vuetify.breakpoint.md ||
                            $vuetify.breakpoint.lg ||
                            $vuetify.breakpoint.xl,
                        rateSpacingMob:
                            $vuetify.breakpoint.xs || $vuetify.breakpoint.sm,
                    }"
                >
                    {{ rate }}
                </div>
            </div>
        </v-card>
    </v-hover>
</template>

<script>
export default {
    props: ["name", "src", "ENname"],
    data: () => ({
        rate: 7.2,
        color: "",
        routeName: "",
    }),
    mounted() {
        this.routeName = this.ENname.replace(/\W/g, "")
        this.color = this.rate > 7 ? "green" : "orange"
    },
}
</script>

<style lang="sass" scoped>
.maxImgSize
    max-width: 190px
    max-height: 270px
.maxImgSizeMob
    max-width: 150px
    max-height: 220px
.maxCardWidth
    max-width: 190px
.maxCardWidthMob
    max-width: 150px
.rate
    position: absolute
    padding: 10px
    color: white
    border-radius: 4px
    z-index: 5
.rateSpacing
    top: -280px
    left: -5px
.rateSpacingMob
    top: -230px
    left: -5px
.film-name
    transition: 0.2s
.red-lighten-1
    color: #EF5350
.film-image
    border-radius: 4px
    transition: 0.2s
    position: relative
    z-index: 0
.opacity
    opacity: 0.7

.standard-elevation
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)
</style>
