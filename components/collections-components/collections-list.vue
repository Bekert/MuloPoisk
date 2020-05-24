<template>
    <v-card outlined>
        <v-list>
            <v-list-item>
                <v-list-item-title class="pl-4">Топ 500</v-list-item-title>
            </v-list-item>
            <v-divider class="mx-4"></v-divider>
            <v-list-item>
                <v-list-group>
                    <template v-slot:activator>
                        <v-list-item-title>По годам</v-list-item-title>
                    </template>
                    <div v-for="n in 5" :key="n">
                        <v-list-item @click>
                            <v-list-item-title class="pl-4"
                                >20{{ n + 15 }}</v-list-item-title
                            >
                        </v-list-item>
                        <v-divider class="mx-4"></v-divider>
                    </div>
                </v-list-group>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<style lang="sass" scoped>
.v-list-item__title
    font-size: 20px
</style>
