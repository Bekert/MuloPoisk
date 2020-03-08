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
            <v-row class="d-flex justify-center ma-0 pa-0 my-2">
                <collectionCard 
                    :class="{'collection-card': $vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl || $vuetify.breakpoint.sm, 'collection-card-mob': $vuetify.breakpoint.xs}"
                    v-for="colCard in filmCollections" 
                    :key="colCard.id" 
                    :name="colCard.name" 
                    :primaryColor="colCard.primaryColor"
                    :secondaryColor="colCard.secondaryColor"
                    :form="colCard.form"
                    :type="colCard.type"
                    :img="colCard.img"
                    :mobile="colCard.mobile"
                />
            </v-row> 
            <v-row class="ma-0 pa-0">
                <v-card elevation="0" tile class="pa-0 ma-0 mt-3">
                    <sectionTitle :title="'Сериалы'"/>
                    <v-card-actions class="overflow-y-auto films-card align-start mt-5">
                        <filmCard v-for="serial in serials" :key="serial.id" class="ml-5 film-first-child" :name="serial.name" :src="serial.src"/>
                    </v-card-actions>
                </v-card>
            </v-row>
            <v-row class="d-flex justify-center ma-0 pa-0 my-2">
                <collectionCard 
                    :class="{'collection-card': $vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl || $vuetify.breakpoint.sm, 'collection-card-mob': $vuetify.breakpoint.xs}"
                    v-for="colCard in filmCollections" 
                    :key="colCard.id" 
                    :name="colCard.name" 
                    :primaryColor="colCard.primaryColor"
                    :secondaryColor="colCard.secondaryColor"
                    :form="colCard.form"
                    :type="colCard.type"
                    :img="colCard.img"
                    :mobile="colCard.mobile"
                />
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
            <v-row class="ma-0 pa-0">
                <v-card elevation="3" class="pa-2 ml-10 d-none d-lg-block">
                    <v-card-title class="title">Фильмы в тренде</v-card-title>
                    <div v-for="trend in filmsInTrends" :key="trend.id" class="d-flex align-center mb-2" style="cursor: pointer">
                        <div style="font-size: 30px" class="mr-2">{{trend.id}}.</div>
                        <v-hover v-slot:default="{hover}">
                            <v-card @click class="d-flex align-center pa-2" outlined width="100%">
                                <v-card width="60" height="80" elevation="0">
                                    <v-img max-width="60" height="80" :src="'/img/films-posters/' + trend.src"></v-img>
                                </v-card>
                                <v-list-item-title class="subtitle-1 ml-2" :class="{'red-lighten-1': hover}">{{trend.name}}</v-list-item-title>
                            </v-card>
                        </v-hover>
                    </div>
                </v-card>
            </v-row>
            <v-row class="ma-0 pa-0 mt-5">
                <v-card elevation="3" class="pa-2 ml-10 d-none d-lg-block">
                    <v-card-title class="title">Популярные сериалы</v-card-title>
                    <div v-for="trend in serialsInTrends" :key="trend.id" class="d-flex align-center mb-2" style="cursor: pointer">
                        <div style="font-size: 30px" class="mr-2">{{trend.id}}.</div>
                        <v-hover v-slot:default="{hover}">
                            <v-card @click class="d-flex align-center pa-2" outlined width="100%">
                                <v-card width="60" height="80" elevation="0">
                                    <v-img max-width="60" height="80" :src="'/img/films-posters/' + trend.src"></v-img>
                                </v-card>
                                <v-list-item-title class="subtitle-1 ml-2" :class="{'red-lighten-1': hover}">{{trend.name}}</v-list-item-title>
                            </v-card>
                        </v-hover>
                    </div>
                </v-card>
            </v-row>
        </v-col>
      </v-row>
  </div>
</template>

<script>
import filmCard from '@/components/film-card'
import sectionTitle from '@/components/index_components/section-title'
import collectionCard from '@/components/index_components/collection-card'
export default {
    components: {
        filmCard, sectionTitle, collectionCard
    },
    data: () => ({
        filmsInTrends: [
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
            },
            {
                id: 4,
                name: 'Терминатор: Темные Судьбы',
                src: 'Terminator-Dark-Fate.jpg'
            },
            {
                id: 5,
                name: 'Терминатор: Темные Судьбы',
                src: 'Terminator-Dark-Fate.jpg'
            }
        ],
        serialsInTrends: [
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
            },
            {
                id: 4,
                name: 'Терминатор: Темные Судьбы',
                src: 'Terminator-Dark-Fate.jpg'
            },
            {
                id: 5,
                name: 'Терминатор: Темные Судьбы',
                src: 'Terminator-Dark-Fate.jpg'
            }
        ],
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
        ],
        filmCollections: [
            {
                id: 1,
                img: 'type3.jpeg',
                name: 'Лучшие сериалы 2020',
                primaryColor: 'green',
                secondaryColor: 'blue',
                type: 'linear-gradient',
                form: 'to right',
                mobile: 'block'
            },
            {
                id: 2,
                img: 'type2.jpg',
                name: 'Лучшие фильмы десятилетия',
                primaryColor: 'orange',
                secondaryColor: 'indigo',
                type: 'linear-gradient',
                form: 'to top',
                mobile: 'block'
            },
            {
                id: 3,
                img: 'type1.jpg',
                name: 'ТОП 100',
                primaryColor: 'blue',
                secondaryColor: 'red',
                type: 'linear-gradient',
                form: 'to bottom left',
                mobile: 'none'
            }
        ],
        serialCollection: [
            {
                id: 1,
                img: 'type3.jpeg',
                name: 'Лучшие сериалы 2020',
                primaryColor: 'green',
                secondaryColor: 'blue',
                type: 'linear-gradient',
                form: 'to right',
                mobile: 'block'
            },
            {
                id: 2,
                img: 'type2.jpg',
                name: 'Лучшие фильмы десятилетия',
                primaryColor: 'orange',
                secondaryColor: 'indigo',
                type: 'linear-gradient',
                form: 'to top',
                mobile: 'block'
            },
            {
                id: 3,
                img: 'type1.jpg',
                name: 'ТОП 100',
                primaryColor: 'blue',
                secondaryColor: 'red',
                type: 'linear-gradient',
                form: 'to bottom left',
                mobile: 'none'
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
    .collection-card
        &:nth-child(2)
            margin-left: 50px !important
            margin-right: 50px !important
    .collection-card-mob
        &:first-child
            margin-right: 15px
        &:nth-child(2)
            margin-left: 15px      
    .red-lighten-1
        color: #EF5350
</style>