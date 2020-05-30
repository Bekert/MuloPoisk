<template>
    <v-col cols="12" class="pa-0 ma-0">
        <v-expansion-panels :class="{ 'pa-0': $vuetify.breakpoint.xs }">
            <v-expansion-panel v-for="season in seasonGuide" :key="season.name">
                <v-expansion-panel-header class="headline">{{
                    season.name
                }}</v-expansion-panel-header>
                <v-expansion-panel-content
                    :class="{ 'pa-0': $vuetify.breakpoint.xs }"
                >
                    <v-list>
                        <div
                            v-for="episod in season.episods"
                            :key="episod.name"
                        >
                            <v-list-item
                                :class="{
                                    'pa-0': $vuetify.breakpoint.xs,
                                    'align-start': $vuetify.breakpoint.xs,
                                    'align-end': !$vuetify.breakpoint.xs,
                                }"
                            >
                                <div
                                    class="d-flex justify-space-between"
                                    style="width: 100%"
                                    :class="{
                                        'align-start': $vuetify.breakpoint.xs,
                                        'align-end': !$vuetify.breakpoint.xs,
                                    }"
                                >
                                    <div class="subtitle-1 ml-2">
                                        {{ episod.index }}. {{ episod.name }}
                                    </div>
                                    <div
                                        class="d-flex align-end"
                                        :class="{
                                            'flex-column':
                                                $vuetify.breakpoint.xs,
                                        }"
                                    >
                                        <div
                                            :class="{
                                                'mr-4': $vuetify.breakpoint.xs,
                                            }"
                                        >
                                            <div
                                                class="d-inline headline"
                                                :style="{
                                                    color: getColor(
                                                        episod.rate
                                                    ),
                                                }"
                                            >
                                                {{ episod.rate }}
                                            </div>
                                            <div
                                                class="grey--text d-inline subtitle-1"
                                            >
                                                /
                                            </div>
                                            <div
                                                class="d-inline body-2"
                                                :style="{
                                                    color: getColor(
                                                        episod.rate
                                                    ),
                                                }"
                                            >
                                                1564
                                            </div>
                                        </div>
                                        <div class="d-flex ml-2">
                                            <v-menu
                                                offset-x
                                                :offset-y="
                                                    $vuetify.breakpoint.xs ||
                                                        $vuetify.breakpoint.sm
                                                "
                                                close-on-content-click
                                            >
                                                <template
                                                    v-slot:activator="{ on }"
                                                >
                                                    <v-btn
                                                        text
                                                        class="rate-btn"
                                                        v-on="on"
                                                        height="100%"
                                                    >
                                                        <div
                                                            class="grey--text d-inline subtitle-1"
                                                        >
                                                            Моя оценка:
                                                        </div>
                                                        <div
                                                            class="d-inline headline ml-1"
                                                            :style="{
                                                                color: getColor(
                                                                    episod.myRate
                                                                ),
                                                            }"
                                                        >
                                                            {{ episod.myRate }}
                                                        </div>
                                                    </v-btn>
                                                </template>
                                                <v-card
                                                    color="white"
                                                    class="pa-2"
                                                    elevation="0"
                                                >
                                                    <div
                                                        class="d-flex flex-column-reverse"
                                                    >
                                                        <div
                                                            v-for="n in 10"
                                                            :key="n"
                                                            class="d-flex"
                                                            @click="
                                                                episod.myRate = n
                                                                getColor(myRate)
                                                            "
                                                            style="cursor: pointer"
                                                        >
                                                            <v-btn
                                                                class="ml-2 mt-2 title mr-2"
                                                                dark
                                                                :class="{
                                                                    green:
                                                                        n >= 7,
                                                                    orange:
                                                                        n < 7 &&
                                                                        n > 3,
                                                                    red: n <= 3,
                                                                }"
                                                                x-small
                                                                fab
                                                                >{{ n }}</v-btn
                                                            >
                                                            <v-icon
                                                                v-for="pepega in n"
                                                                :key="pepega"
                                                                small
                                                                >star</v-icon
                                                            >
                                                        </div>
                                                    </div>
                                                </v-card>
                                            </v-menu>
                                        </div>
                                    </div>
                                </div>
                            </v-list-item>
                            <v-divider
                                class="mt-2"
                                :class="{ 'mb-2': $vuetify.breakpoint.xs }"
                            />
                        </div>
                    </v-list>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-col>
</template>

<script>
export default {
    props: ['seasonGuide'],
    data: () => ({
        color: '',
    }),
    methods: {
        getColor(typeRate) {
            if (typeRate >= 7) {
                return '#4CAF50'
            } else if (typeRate < 7 && typeRate > 3) {
                return '#FF9800'
            } else if (typeRate <= 3) {
                return '#F44336'
            } else {
                return '#9E9E9E'
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
