<template>
    <div>
        <v-row class="ma-0 pa-0">
            <v-col cols="6" class="subtitle-1 font-weight-light">
                <div class="my-3">год</div>
                <div class="my-3">страна</div>
                <div class="my-3">длительность</div>
                <div class="my-3">бюджет</div>
                <div class="my-3">год</div>
                <div class="my-3">сборы</div>
                <div class="my-3">сборы: США</div>
                <div class="my-3">сборы: РФ</div>
                <div class="my-3">премьера: Мир</div>
                <div class="my-3">премьера: США</div>
                <div class="my-3">премьера: РФ</div>
                <div class="my-3">прокатчик: РФ</div>
                <div class="my-3">прокатчик</div>
                <div class="my-3">премьера: Онлайн</div>
                <div class="my-3">дистрибьютор</div>
            </v-col>
            <v-col cols="6" class="subtitle-1">
                <div class="my-3">2020</div>
                <div class="my-3">пепега</div>
                <div class="my-3">длительность</div>
                <div class="my-3">бюджет</div>
                <div class="my-3">год</div>
                <div class="my-3">сборы</div>
                <div class="my-3">сборы: США</div>
                <div class="my-3">сборы: РФ</div>
                <div class="my-3">премьера: Мир</div>
                <div class="my-3">премьера: США</div>
                <div class="my-3">премьера: РФ</div>
                <div class="my-3">прокатчик: РФ</div>
                <div class="my-3">прокатчик</div>
                <div class="my-3">премьера: Онлайн</div>
                <div class="my-3">дистрибьютор</div>
            </v-col>
        </v-row>
        <v-row class="ma-0 pa-0">
            <v-card color="amber" height="40" elevation="0" class="mr-2">
                <v-card-text class="pa-2">Криминал</v-card-text>
            </v-card>
            <v-card color="amber" height="40" elevation="0" class="mr-2">
                <v-card-text class="pa-2">Драма</v-card-text>
            </v-card>
            <v-card color="amber" height="40" elevation="0" class="mr-2">
                <v-card-text class="pa-2">Триллер</v-card-text>
            </v-card>
            <v-card
                color="light-green"
                dark
                height="40"
                elevation="0"
                class="mr-2"
            >
                <v-card-text class="pa-2">ТОП 250</v-card-text>
            </v-card>
            <v-card
                color="light-green"
                dark
                height="40"
                elevation="0"
                :class="{ 'mt-2': $vuetify.breakpoint.xs }"
            >
                <v-card-text class="pa-2">Онлайн: 3</v-card-text>
            </v-card>
        </v-row>
        <v-row class="ma-0 pa-0">
            <div class="mt-2">
                Готэм, начало 1980-х годов. Комик Артур Флек живет с больной
                матерью, которая с детства учит его «ходить с улыбкой». Пытаясь
                нести в мир хорошее и дарить людям радость, Артур сталкивается с
                человеческой жестокостью и постепенно приходит к выводу, что
                этот мир получит от него не добрую улыбку, а ухмылку злодея
                Джокера.
            </div>
        </v-row>
        <v-row class="ma-0 pa-0">
            <actors />
        </v-row>
        <v-row class="ma-0 pa-0" v-if="type === 'serial'">
            <seasonGuide :seasonGuide="seasonGuide" />
        </v-row>
    </div>
</template>

<script>
import actors from '../film_or_serial_components/actors'
import seasonGuide from '../film_or_serial_components/season-guide'
export default {
    components: {
        actors,
        seasonGuide,
    },
    data: () => ({
        type: 'serial',
        seasonGuide: [
            {
                name: 'Сезон 1',
                episods: [
                    {
                        index: 1,
                        name: 'Пепега',
                        duration: '1:53',
                        rate: 8.2,
                        myRate: '—',
                    },
                    {
                        index: 2,
                        name: 'ОЛА',
                        duration: '1:53',
                        rate: 8.2,
                        myRate: 7,
                    },
                    {
                        index: 3,
                        name: 'Зузуга',
                        duration: '1:53',
                        rate: 8.2,
                        myRate: 7,
                    },
                    {
                        index: 4,
                        name: 'Клоун',
                        duration: '1:53',
                        rate: 6.2,
                        myRate: 7,
                    },
                    {
                        index: 5,
                        name: 'Восстание орков',
                        duration: '1:53',
                        rate: 4.2,
                        myRate: 7,
                    },
                ],
            },
            {
                name: 'Сезон 1.5',
                episods: [
                    {
                        index: 1,
                        name: 'Пепега',
                        duration: '1:53',
                        rate: 8.2,
                        myRate: 7,
                    },
                    {
                        index: 2,
                        name: 'ОЛА',
                        duration: '1:53',
                        rate: 8.2,
                        myRate: 7,
                    },
                    {
                        index: 3,
                        name: 'Зузуга',
                        duration: '1:53',
                        rate: 8.2,
                        myRate: 7,
                    },
                    {
                        index: 4,
                        name: 'Клоун',
                        duration: '1:53',
                        rate: 6.2,
                        myRate: 7,
                    },
                    {
                        index: 5,
                        name: 'Восстание орков',
                        duration: '1:53',
                        rate: 4.2,
                        myRate: 7,
                    },
                ],
            },
            {
                name: 'Сезон 2',
                episods: [
                    {
                        index: 1,
                        name: 'Пепега',
                        duration: '1:53',
                        rate: 8.2,
                        myRate: 7,
                    },
                    {
                        index: 2,
                        name: 'ОЛА',
                        duration: '1:53',
                        rate: 8.2,
                        myRate: 7,
                    },
                    {
                        index: 3,
                        name: 'Зузуга',
                        duration: '1:53',
                        rate: 8.2,
                        myRate: 7,
                    },
                    {
                        index: 4,
                        name: 'Клоун',
                        duration: '1:53',
                        rate: 6.2,
                        myRate: 7,
                    },
                    {
                        index: 5,
                        name: 'Восстание орков',
                        duration: '1:53',
                        rate: 4.2,
                        myRate: 7,
                    },
                ],
            },
            {
                name: 'Сезон 3',
                episods: [
                    {
                        index: 1,
                        name: 'Пепега',
                        duration: '1:53',
                        rate: 8.2,
                        myRate: 7,
                    },
                    {
                        index: 2,
                        name: 'ОЛА',
                        duration: '1:53',
                        rate: 8.2,
                        myRate: 7,
                    },
                    {
                        index: 3,
                        name: 'Зузуга',
                        duration: '1:53',
                        rate: 8.2,
                        myRate: 7,
                    },
                    {
                        index: 4,
                        name: 'Клоун',
                        duration: '1:53',
                        rate: 6.2,
                        myRate: 7,
                    },
                    {
                        index: 5,
                        name: 'Восстание орков',
                        duration: '1:53',
                        rate: 4.2,
                        myRate: 7,
                    },
                ],
            },
        ],
    }),
}
</script>
