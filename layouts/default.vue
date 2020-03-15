<template>
    <v-app app>
        <v-content class="pt-0">
            <Navbar/>
            <v-container class="my-12 pa-0">
                <nuxt/>
            </v-container>
            <Footer class="pepega"/>
        </v-content>
    </v-app>
</template>

<script>
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
export default {
    components: {
        Navbar, Footer
    }
}
</script>

<style lang="sass" scoped>
    .pepega
        position: absolute
        bottom: 0
        width: 100%
</style>
