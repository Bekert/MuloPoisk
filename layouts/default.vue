<template>
    <v-app app>
        <v-content class="pt-0">
            <Navbar/>
            <v-container class="mt-12 pa-0">
                <nuxt/>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import Navbar from '@/components/navbar'
export default {
    components: {
        Navbar
    }
}
</script>

