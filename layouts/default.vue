<template>
    <v-app app>
        <v-content class="pt-0">
            <Navbar/>
            <v-container class="mt-12 pa-0">
                <nuxt/>
            </v-container>
            <Footer class="mt-4"/>
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

