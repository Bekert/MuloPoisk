<template>
    <div>
        <v-row class="ma-0 pa-0">
            <v-col cols="12" md="5">
                <posterAndRate />
            </v-col>
            <v-col cols="12" md="7">
                <info />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import info from "../components/film_or_serial_components/info"
import posterAndRate from "../components/film_or_serial_components/poster-and-rate"
export default {
    components: {
        info,
        posterAndRate,
    },
}
</script>
