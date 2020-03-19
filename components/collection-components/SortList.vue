<template>
    <div class="d-flex justify-space-between">
        <v-text-field placeholder="Поиск" class="pa-0 pr-8" hide-details single-line prepend-inner-icon="search"></v-text-field>
        <div class="d-flex flex-grow-1">
            <v-btn 
                class="pa-0 sort-item font-weight-regular d-flex flex-grow-1" 
                text
                tile 
                style="border-left: 1px solid rgba(0, 0, 0, 0.2)"
                @click="sortDate = false; sortRate = false; sortMyRate = false; sortMyDate === false ? sortMyDate = !sortMyDate : sortMyDateDown = !sortMyDateDown"
            >
                <div>Дата просмотра</div>
                <div v-if="sortMyDate">
                    <v-icon v-if="sortMyDateDown">arrow_drop_down</v-icon>
                    <v-icon v-else-if="!sortMyDateDown">arrow_drop_up</v-icon>
                </div>
            </v-btn>
        </div>
        <div class="d-flex">
            <v-btn 
                class="pa-0 sort-item font-weight-regular" 
                text
                tile 
                @click="sortMyDate = false; sortDate = false; sortRate = false; sortMyRate === false ? sortMyRate = !sortMyRate : sortMyRateDown = !sortMyRateDown"
            >
                <div>Моя оценка</div>
                <div v-if="sortMyRate">
                    <v-icon v-if="sortMyRateDown">arrow_drop_down</v-icon>
                    <v-icon v-else-if="!sortMyRateDown">arrow_drop_up</v-icon>
                </div>
            </v-btn>
            <v-btn 
                class="pa-0 sort-item font-weight-regular" 
                text 
                tile 
                @click="sortMyDate = false; sortDate = false; sortMyRate = false; sortRate === false ? sortRate = !sortRate : sortRateDown = !sortRateDown"
            >
                <div>Рейтинг</div>
                <div v-if="sortRate">
                    <v-icon v-if="sortRateDown">arrow_drop_down</v-icon>
                    <v-icon v-else-if="!sortRateDown">arrow_drop_up</v-icon>
                </div>
            </v-btn>
            <v-btn 
                class="pa-0 sort-item font-weight-regular" 
                text 
                tile 
                @click="sortMyDate = false; sortMyRate = false; sortRate = false; sortDate === false ? sortDate = !sortDate : sortDateDown = !sortDateDown"
            >
                <div>Дата выхода</div>
                <div v-if="sortDate">
                    <v-icon v-if="sortDateDown">arrow_drop_down</v-icon>
                    <v-icon v-else-if="!sortDateDown">arrow_drop_up</v-icon>
                </div>
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        sortMyDate: true,
        sortMyDateDown: true,
        sortMyRate: false, 
        sortMyRateDown: true,
        sortRate: false,
        sortRateDown: true,
        sortDate: false,
        sortDateDown: true,
        pepega: false
    })
}
</script>

<style lang="sass" scoped>
    .sort-item
        text-transform: none
        width: 150px
        cursor: pointer
        border-right: 1px solid rgba(0, 0, 0, 0.2)
        &:hover 
            background-color: rgba(0, 0, 0, 0.1)
        
        
    .false-opacity
        opacity: 0
    .true-opacity
        opacity: 1
        
</style>