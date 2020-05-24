<template>
    <div>
        <v-tabs centered v-model="tab" show-arrows>
            <v-tab :href="'#film-rates'">Мои оценки: фильмы</v-tab>
            <v-tab :href="'#serial-rates'">Мои оценки: сериалы</v-tab>
            <v-tab :href="'#want-to-watch'">Буду смотреть: фильмы</v-tab>
            <v-tab :href="'#want-to-watch-serial'"
                >Буду смотреть: сериалы</v-tab
            >
        </v-tabs>
        <v-tabs-items v-model="tab" class="overflow-y-auto">
            <v-tab-item :value="'film-rates'">
                <div class="d-flex">
                    <v-col cols="12" lg="9" class="pa-0">
                        <SortListMob
                            :type="'сериал'"
                            class="my-3"
                            v-if="
                                $vuetify.breakpoint.xs ||
                                    $vuetify.breakpoint.sm ||
                                    $vuetify.breakpoint.md
                            "
                        />
                        <SortList class="my-3" v-else />
                        <div v-for="n in 3" :key="n" class="mt-4">
                            <div
                                class="display-2 font-weight-bold"
                                :class="{
                                    'title ml-2':
                                        $vuetify.breakpoint.xs ||
                                        $vuetify.breakpoint.sm,
                                }"
                            >
                                2{{ n }} февраля
                            </div>
                            <FilmOrSerialCard2
                                class="mt-4"
                                v-for="n in 2"
                                :key="n"
                                :type="'фильм'"
                            />
                        </div>
                    </v-col>
                    <v-col
                        cols="0"
                        lg="3"
                        class="pa-0 pl-2"
                        v-if="
                            !$vuetify.breakpoint.xs &&
                                !$vuetify.breakpoint.sm &&
                                !$vuetify.breakpoint.md
                        "
                    >
                        <Filters :type="'фильм'" />
                    </v-col>
                </div>
            </v-tab-item>
            <v-tab-item :value="'serial-rates'">
                <div class="d-flex">
                    <v-col cols="12" lg="9" class="pa-0">
                        <SortListMob
                            :type="'сериал'"
                            class="my-3"
                            v-if="
                                $vuetify.breakpoint.xs ||
                                    $vuetify.breakpoint.sm ||
                                    $vuetify.breakpoint.md
                            "
                        />
                        <SortList class="my-3" v-else />
                        <div v-for="n in 2" :key="n" class="mt-4">
                            <div
                                class="display-2 font-weight-bold"
                                :class="{
                                    'title ml-2':
                                        $vuetify.breakpoint.xs ||
                                        $vuetify.breakpoint.sm,
                                }"
                            >
                                2{{ n }} февраля
                            </div>
                            <FilmOrSerialCard2
                                class="mt-4"
                                v-for="n in 1"
                                :key="n"
                                :type="'сериал'"
                            />
                        </div>
                    </v-col>
                    <v-col
                        cols="0"
                        lg="3"
                        class="pa-0 pl-2"
                        v-if="
                            !$vuetify.breakpoint.xs &&
                                !$vuetify.breakpoint.sm &&
                                !$vuetify.breakpoint.md
                        "
                    >
                        <Filters :type="'сериал'" />
                    </v-col>
                </div>
            </v-tab-item>
            <v-tab-item :value="'want-to-watch'">
                <div class="d-flex">
                    <v-col cols="12" lg="9" class="pa-0">
                        <SortListMob
                            :type="'фильм'"
                            class="my-3"
                            v-if="
                                $vuetify.breakpoint.xs ||
                                    $vuetify.breakpoint.sm ||
                                    $vuetify.breakpoint.md
                            "
                        />
                        <SortList class="my-3" v-else />
                        <div v-for="n in 2" :key="n" class="mt-4">
                            <div
                                class="display-2 font-weight-bold"
                                :class="{
                                    'title ml-2':
                                        $vuetify.breakpoint.xs ||
                                        $vuetify.breakpoint.sm,
                                }"
                            >
                                2{{ n }} февраля
                            </div>
                            <FilmOrSerialCard2
                                class="mt-4"
                                v-for="n in 1"
                                :key="n"
                                :type="'фильм'"
                            />
                        </div>
                    </v-col>
                    <v-col
                        cols="0"
                        lg="3"
                        class="pa-0 pl-2"
                        v-if="
                            !$vuetify.breakpoint.xs &&
                                !$vuetify.breakpoint.sm &&
                                !$vuetify.breakpoint.md
                        "
                    >
                        <Filters :type="'фильм'" />
                    </v-col>
                </div>
            </v-tab-item>
            <v-tab-item :value="'want-to-watch-serial'">
                <div class="d-flex">
                    <v-col cols="12" lg="9" class="pa-0">
                        <SortListMob
                            :type="'сериал'"
                            class="my-3"
                            v-if="
                                $vuetify.breakpoint.xs ||
                                    $vuetify.breakpoint.sm ||
                                    $vuetify.breakpoint.md
                            "
                        />
                        <SortList class="my-3" v-else />
                        <div v-for="n in 2" :key="n" class="mt-4">
                            <div
                                class="display-2 font-weight-bold"
                                :class="{
                                    'title ml-2':
                                        $vuetify.breakpoint.xs ||
                                        $vuetify.breakpoint.sm,
                                }"
                            >
                                2{{ n }} февраля
                            </div>
                            <FilmOrSerialCard2
                                class="mt-4"
                                v-for="n in 1"
                                :key="n"
                                :type="'сериал'"
                            />
                        </div>
                    </v-col>
                    <v-col
                        cols="0"
                        lg="3"
                        class="pa-0 pl-2"
                        v-if="
                            !$vuetify.breakpoint.xs &&
                                !$vuetify.breakpoint.sm &&
                                !$vuetify.breakpoint.md
                        "
                    >
                        <Filters :type="'сериал'" />
                    </v-col>
                </div>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
import SortList from "../components/collection-components/SortList"
import FilmOrSerialCard2 from "../components/FilmOrSerialCard2"
import SortListMob from "../components/collection-components/SortListMob"
import Filters from "../components/collection-components/Filters"
export default {
    data: () => ({
        tab: "film-rates",
    }),
    mounted() {
        if (this.$route.fullPath === "/collection?want-to-watch") {
            this.tab = "want-to-watch"
        }
    },
    components: {
        FilmOrSerialCard2,
        SortList,
        SortListMob,
        Filters,
    },
}
</script>
