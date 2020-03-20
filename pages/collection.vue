<template>
    <div>
        <v-tabs centered v-model="tab" show-arrows>
            <v-tab>Мои оценки: фильмы</v-tab>
            <v-tab>Мои оценки: сериалы</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab" class="overflow-y-auto">
            <v-tab-item>
                <div class="d-flex">
                    <v-col cols="12" lg="9" class="pa-0">
                        <SortList class="my-3" v-if="$vuetify.breakpoint.xl || $vuetify.breakpoint.lg"/>
                        <SortListMob :type="'фильм'" class="my-3" v-else-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm || $vuetify.breakpoint.md"/>
                        <div v-for="n in 3" :key="n" class="mt-4">
                            <div class="display-2 font-weight-bold" :class="{'title ml-2': $vuetify.breakpoint.xs || $vuetify.breakpoint.sm}">2{{n}} февраля</div>
                            <FilmOrSerialCard2 class="mt-4" v-for="n in 2" :key="n" :type="'фильм'"/>
                        </div>
                    </v-col>
                    <v-col cols="0" lg="3" class="pa-0 pl-2" v-if="$vuetify.breakpoint.xl || $vuetify.breakpoint.lg">
                        <Filters :type="'фильм'"/>
                    </v-col>
                </div>
            </v-tab-item>
            <v-tab-item>
                <div class="d-flex">
                    <v-col cols="12" lg="9" class="pa-0">
                        <SortList class="my-3" v-if="$vuetify.breakpoint.xl || $vuetify.breakpoint.lg"/>
                        <SortListMob :type="'сериал'" class="my-3" v-else-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm || $vuetify.breakpoint.md"/>
                        <div v-for="n in 2" :key="n" class="mt-4">
                            <div class="display-2 font-weight-bold" :class="{'title ml-2': $vuetify.breakpoint.xs || $vuetify.breakpoint.sm}">2{{n}} февраля</div>
                            <FilmOrSerialCard2 class="mt-4" v-for="n in 1" :key="n" :type="'сериал'"/>
                        </div>
                    </v-col>
                    <v-col cols="0" lg="3" class="pa-0 pl-2" v-if="$vuetify.breakpoint.xl || $vuetify.breakpoint.lg">
                        <Filters :type="'сериал'"/>
                    </v-col>
                </div>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
import SortList from '../components/collection-components/SortList'
import FilmOrSerialCard2 from '../components/FilmOrSerialCard2'
import SortListMob from '../components/collection-components/SortListMob'
import Filters from '../components/collection-components/Filters'
export default {
    data: () => ({
        tab: null
    }),
    components: {
        FilmOrSerialCard2, SortList, SortListMob, Filters
    }
}
</script>