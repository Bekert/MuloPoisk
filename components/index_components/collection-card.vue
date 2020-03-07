<template>
    <div>
        <v-card :style="`background: ${type}(${form}, ${primaryColor}, ${secondaryColor})`" height="200px" width="200px" dark>
            <v-card-title class="collection-name">{{name}}</v-card-title>
            <v-img :src="'/img/collection-image/' + img" min-height="200" min-width="200" class="img-collection"></v-img>
        </v-card>
    </div>
</template>

<script>
export default {
    props: ['primaryColor', 'secondaryColor', 'form', 'type', 'name', 'img']
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
</style>