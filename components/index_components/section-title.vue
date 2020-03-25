<template>
    <v-hover v-slot:default="{hover}">
        <v-card-title :class="{'active-text': hover}" style="cursor: pointer" class="d-inline pl-2" @click="$router.push(src)">
            {{title}} <v-icon class="title-icon" large>keyboard_arrow_right</v-icon>
        </v-card-title>
    </v-hover>
</template>

<script>
export default {
    props: ['title', 'src']
}
</script>

<style lang="sass" scoped>
    .title-icon
        color: inherit
        transition: 0s !important
        position: absolute
        margin-left: -5px
</style>