<template>
    <v-hover v-slot:default="{ hover }">
        <v-card
            elevation="0"
            class="text-center"
            @click="$router.push()"
            max-width="130"
        >
            <v-card>
                <v-img
                    :src="'/img/actors-image/' + ENname + '.jpg'"
                    height="200"
                    width="130"
                    style="transition: 0.2s"
                ></v-img>
                <v-fade-transition>
                    <v-overlay opacity="0.5" absolute v-if="hover">
                        <v-icon color="orange" large>search</v-icon>
                    </v-overlay>
                </v-fade-transition>
            </v-card>
            <div
                class="subtitle-1"
                :class="{ 'red-lighten-1': hover }"
                style="transition: 0.2s"
            >
                {{ name }}
            </div>
        </v-card>
    </v-hover>
</template>

<script>
export default {
    props: ['name', 'ENname'],
}
</script>

<style lang="sass" scoped>
.red-lighten-1
    color: #EF5350
</style>
