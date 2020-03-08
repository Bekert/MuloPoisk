<template>
    <div>
        <v-card 
            :style="`background: ${type}(${form}, ${primaryColor}, ${secondaryColor})`" 
            height="200px" 
            width="200px" 
            
            dark
            :class="{'max-card-size': $vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl, 'max-card-size-mob': $vuetify.breakpoint.xs || $vuetify.breakpoint.sm, 'mobile-visible': mobile === 'none' && $vuetify.breakpoint.xs}"
        >
            <v-card-title class="collection-name" :class="fontSize">{{name}}</v-card-title>
            <v-img 
                :src="'/img/collection-image/' + img" 
                class="img-collection"
                :class="{'max-card-size': $vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl, 'max-card-size-mob': $vuetify.breakpoint.xs || $vuetify.breakpoint.sm}"
            ></v-img>
        </v-card>
    </div>
</template>

<script>
export default {
    props: ['primaryColor', 'secondaryColor', 'form', 'type', 'name', 'img', 'mobile'],
    data: () => ({
        fontSize: ''
    }),
    mounted() {
        this.fontSize = (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm) ? 'subtitle-2' : 'title'
    }
}
</script>

<style lang="sass" scoped>
    .collection-name
        position: absolute
    .img-collection
        opacity: 0.1
        transition: 0.5s
        cursor: pointer
        &:hover 
            opacity: 0.3
    .max-card-size-mob
        max-width: 150px
        max-height: 150px
    .max-card-size
        max-width: 200px
        max-height: 200px
    .mobile-visible
        display: none
</style>