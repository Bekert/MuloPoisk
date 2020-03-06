<template>
  <div>
      <v-row class="ma-0 pa-0">
        <v-col xl="9" lg="8" cols="12" class="pa-0">
            <v-row class="ma-0 pa-0"> 
                <v-card elevation="0" tile class="pa-0 ma-0 mt-3">
                    <sectionTitle :title="'В кино'"/>
                    <v-card-actions class="overflow-y-auto films-card align-start mt-5">
                        <filmCard v-for="film in filmsInCinema" :key="film.id" class="ml-5 film-first-child" :name="film.name" :src="film.src"/>
                    </v-card-actions>
                </v-card>
            </v-row>
            <v-row class="ma-0 pa-0">
                <v-card elevation="0" tile class="pa-0 ma-0 mt-3">
                    <sectionTitle :title="'Онлайн'"/>
                    <v-card-actions class="overflow-y-auto films-card align-start mt-5">
                        <filmCard v-for="film in filmsOnline" :key="film.id" class="ml-5 film-first-child" :name="film.name" :src="film.src"/>
                    </v-card-actions>
                </v-card>
            </v-row>
            <v-row class="d-flex justify-sm-center ma-0 pa-0 flex-column flex-sm-row">
                <v-card color="black" height="200px" width="200px"></v-card>
                <v-card color="black" height="200px" width="200px" class="my-10 my-sm-0 mx-sm-10"></v-card>
                <v-card color="black" height="200px" width="200px"></v-card>
            </v-row>
            <v-row class="ma-0 pa-0">
                <v-card elevation="0" tile class="pa-0 ma-0 mt-3">
                    <sectionTitle :title="'Сериалы'"/>
                    <v-card-actions class="overflow-y-auto films-card align-start mt-5">
                        <filmCard v-for="serial in serials" :key="serial.id" class="ml-5 film-first-child" :name="serial.name" :src="serial.src"/>
                    </v-card-actions>
                </v-card>
            </v-row>
        </v-col>
        <v-col xl="3" lg="4" cols="0" class="pa-0">
            <v-row class="ma-0 pa-0">
                <v-card width="340" elevation="0" class="ma-auto d-none d-lg-block">
                    <v-card-title>Вы хотели посмотреть</v-card-title>
                    <v-card-actions>
                        <v-slide-group show-arrows>
                        <v-slide-item v-for="film in wantToWatchList" :key="film.id">
                            <filmCard class="mx-15" :name="film.name" :src="film.src"/>
                        </v-slide-item>
                        </v-slide-group>
                    </v-card-actions>
                </v-card>
            </v-row>
        </v-col>
      </v-row>
  </div>
</template>

<script>
import filmCard from '@/components/film-card'
import sectionTitle from '@/components/index_components/section-title'
export default {
    components: {
        filmCard, sectionTitle
    },
    data: () => ({
        wantToWatchList: [
            {
                id: 1,
                name: 'Джокер',
                src: 'Joker.jpg'
            },
            {
                id: 2,
                name: 'Джокер',
                src: 'Joker.jpg'
            },
            {
                id: 3,
                name: 'Терминатор: Темные Судьбы',
                src: 'Terminator-Dark-Fate.jpg'
            }
        ],
        filmsInCinema: [
            {
                id: 1,
                name: 'Джокер',
                src: 'Joker.jpg'
            },
            {
                id: 2,
                name: 'Джокер',
                src: 'Joker.jpg'
            },
            {
                id: 3,
                name: 'Терминатор: Темные судьбы',
                src: 'Terminator-Dark-Fate.jpg'
            },
            {
                id: 4,
                name: 'Джокер',
                src: 'Joker.jpg'
            },
            {
                id: 5,
                name: 'Терминатор: Темные судьбы',
                src: 'Terminator-Dark-Fate.jpg'
            },
            {
                id: 6,
                name: 'Терминатор: Темные судьбы',
                src: 'Terminator-Dark-Fate.jpg'
            }
        ],
        filmsOnline: [
            {
                id: 1,
                name: 'Джокер',
                src: 'Joker.jpg'
            },
            {
                id: 2,
                name: 'Джокер',
                src: 'Joker.jpg'
            },
            {
                id: 3,
                name: 'Джокер',
                src: 'Joker.jpg'
            },
            {
                id: 4,
                name: 'Джокер',
                src: 'Joker.jpg'
            },
            {
                id: 5,
                name: 'Джокер',
                src: 'Joker.jpg'
            },
            {
                id: 6,
                name: 'Терминатор: Темные судьбы',
                src: 'Terminator-Dark-Fate.jpg'
            }
        ],
        serials: [
            {
                id: 1,
                name: 'Джокер',
                src: 'Joker.jpg'
            },
            {
                id: 2,
                name: 'Джокер',
                src: 'Joker.jpg'
            },
            {
                id: 3,
                name: 'Джокер',
                src: 'Joker.jpg'
            },
            {
                id: 4,
                name: 'Джокер',
                src: 'Joker.jpg'
            },
            {
                id: 5,
                name: 'Джокер',
                src: 'Joker.jpg'
            },
            {
                id: 6,
                name: 'Терминатор: Темные судьбы',
                src: 'Terminator-Dark-Fate.jpg'
            }
        ]
    })
};
</script>

<style lang="sass" scoped>
    .film-first-child
        &:first-child
            margin-left: 0 !important
    .mxh-300
        max-height: 300px !important
    .mx-15
        margin-left: 15px
        margin-right: 15px
    .films-card::-webkit-scrollbar
        height: 20px
    .films-card::-webkit-scrollbar-track
        background-color: white
    .films-card::-webkit-scrollbar-thumb 
        height: 6px
        border: 4px solid white
        border-radius: 10px
        background-color: #C8C8C8
        transition: 0.5s
        &:hover
            background-color: #a6a6a6

</style>