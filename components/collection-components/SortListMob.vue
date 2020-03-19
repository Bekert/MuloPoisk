<template>
    <div class="d-flex justify-space-between">
        <v-col cols="4" sm="6">
            <v-text-field placeholder="Поиск" class="pa-0" hide-details single-line prepend-inner-icon="search"></v-text-field>
        </v-col>
        <v-col cols="8" sm="6" class="d-flex align-end pl-0">
            <v-icon style="transform: rotate(90deg)" @click="sortRotate = !sortRotate" :class="{'active-icon': sortRotate}">compare_arrows</v-icon>
            <v-select v-model="select" :items="items" hide-details dense label="Сортировать по"></v-select>
            <v-menu offset-y allow-overflow>
                <template v-slot:activator="{ on }">
                    <v-icon v-on="on" large>filter_list</v-icon>
                </template>
                <Filters/>
            </v-menu>
        </v-col>
    </div>
</template>

<script>
import Filters from './Filters'
export default {
    data: () => ({
        sortRotate: false,
        select: 'Дата просмотра',
        items: ['Дата просмотра', 'Моя оценка', 'Рейтинг', 'Дата выхода']
    }),
    components: {
        Filters
    }
}
</script>

<style lang="sass" scoped>
    .active-icon
        color: #4FC3F7
</style>