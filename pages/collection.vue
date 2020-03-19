<template>
    <div>
        <v-tabs centered v-model="tab">
            <v-tab>Мои оценки: фильмы</v-tab>
            <v-tab>Мои оценки: сериалы</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab" >
            <v-tab-item>
                <div class="d-flex">
                    <v-col cols="12" lg="9" class="pa-0">
                        <FilmOrSerialCard2/>
                        <FilmOrSerialCard2 class="mt-4"/>
                    </v-col>
                    <v-col cols="0" lg="3" class="pa-0" v-if="$vuetify.breakpoint.xl || $vuetify.breakpoint.lg">
                        <div>pepega</div>
                    </v-col>
                </div>
            </v-tab-item>
            <v-tab-item>
                <h1>сериалы</h1>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
import FilmOrSerialCard2 from '../components/FilmOrSerialCard2'
export default {
    data: () => ({
        tab: null
    }),
    components: {
        FilmOrSerialCard2
    }
}
</script>