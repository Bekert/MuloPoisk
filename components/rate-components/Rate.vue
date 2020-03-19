<template>
    <div :class="{'d-flex flex-column': ($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) && (column === true)}" >
        <div class="d-inline">
            <div class="d-inline headline" :style="{color: getColor(rate)}">{{rate}}</div>
            <div class="grey--text d-inline subtitle-1">/</div>
        </div>
        <div class="d-inline body-2" :style="{color: getColor(rate)}">{{rateValue}}</div>
    </div>
</template>

<script>
export default {
    props: ['rate', 'rateValue', 'column'],
    methods: {
        getColor(typeRate) {
            if (typeRate >= 7) {
                return '#4CAF50'
            }
            else if (typeRate < 7 && typeRate > 3) {
                return '#FF9800'
            }
            else if (typeRate <= 3) {
                return '#F44336'
            }
            else {
                return '#9E9E9E'
            }
        }
    }
}
</script>