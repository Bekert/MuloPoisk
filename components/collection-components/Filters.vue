<template>
    <v-card elevation="0">
        <v-list>
            <v-list-item>
                <v-checkbox></v-checkbox>
                <v-icon color="pink lighten-2">favorite</v-icon>
                <v-list-item-title class="ml-1">Любимый фильм</v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-title class="title">Год:</v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-text>От</v-list-item-text>
                <v-text-field v-model="yearFrom" dense single-line class="mx-4"></v-text-field>
                <v-list-item-text>До</v-list-item-text>
                <v-text-field v-model="yearTo" dense single-line class="mx-4"></v-text-field>
            </v-list-item>
            <v-list-item>
                <v-list-item-title class="title">Жанры:</v-list-item-title>
            </v-list-item>
            <v-list-item v-for="genre in genres" :key="genre">
                <v-checkbox></v-checkbox>
                <v-list-item-title>{{genre}}</v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-btn color="blue" dark>Сохранить</v-btn>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        genres: ['Аниме', 'Биография', 'Боевик', 'Вестерн', 'Военный', 'Детектив', 'и еще миллиард'],
        yearFrom: 1900,
        yearTo: 2020
    })
}
</script>