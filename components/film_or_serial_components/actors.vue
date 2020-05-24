<template>
    <div class="pa-0 ma-0 overflow-y-auto d-flex">
        <v-card elevation="0">
            <div class="title text-center py-4">Режиссер</div>
            <actorsCard
                v-for="director in actorsAndGroups.filter(
                    (el) => el.type === 'director'
                )"
                :key="director.id"
                :name="director.name"
                :ENname="director.ENname"
            />
        </v-card>
        <v-card elevation="0" class="ml-10">
            <div
                class="title py-4"
                :class="{ 'pl-1': screenWriters, 'pl-3': !screenWriters }"
            >
                {{ screenWriters ? "Сценаристы" : "Сценарист" }}
            </div>
            <div class="d-flex actors-list">
                <actorsCard
                    v-for="director in actorsAndGroups.filter(
                        (el) => el.type === 'screenwriter'
                    )"
                    :key="director.id"
                    :name="director.name"
                    :ENname="director.ENname"
                    class="ml-6 actors-list-item"
                />
            </div>
        </v-card>
        <v-card elevation="0" class="ml-10">
            <div class="title pl-7 py-4">Актеры</div>
            <div class="d-flex actors-list">
                <actorsCard
                    v-for="director in actorsAndGroups.filter(
                        (el) => el.type === 'actor'
                    )"
                    :key="director.id"
                    :name="director.name"
                    :ENname="director.ENname"
                    class="ml-6 actors-list-item"
                />
            </div>
        </v-card>
    </div>
</template>

<script>
import actorsCard from "../actors-card"
export default {
    components: {
        actorsCard,
    },
    data: () => ({
        actorsAndGroups: [
            {
                id: 1,
                type: "director",
                name: "Хоакин Феникс",
                ENname: "JoaquinPhoenix",
                groupName: "Режиссер",
            },
            {
                id: 2,
                type: "screenwriter",
                name: "Хоакин Феникс",
                ENname: "JoaquinPhoenix",
            },

            {
                id: 3,
                type: "actor",
                name: "Хоакин Феникс",
                ENname: "JoaquinPhoenix",
            },
            {
                id: 4,
                type: "actor",
                name: "Хоакин Феникс",
                ENname: "JoaquinPhoenix",
            },
            {
                id: 5,
                type: "actor",
                name: "Хоакин Феникс",
                ENname: "JoaquinPhoenix",
            },
        ],
        screenWriters: 0,
    }),
    mounted() {
        this.actorsAndGroups.forEach((el) => {
            if (el.type === "screenwriter") {
                this.screenWriters++
            }
        })
        this.screenWriters > 1
            ? (this.screenWriters = true)
            : (this.screenWriters = false)
    },
}
</script>

<style lang="sass" scoped>
.actors-list-item
    &:first-child
        margin-left: 0 !important
</style>
