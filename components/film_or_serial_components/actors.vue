<template>
    <div>
        <actorsCard 
            v-for="director in actorsAndGroups.filter(el => el.type === 'director')" 
            :key="director.id"
            :name="director.name"
            :ENname="director.ENname"
        />
    </div>
</template>

<script>
import actorsCard from '../actors-card'
export default {
    components: {
        actorsCard
    },
    data: () => ({
        actorsAndGroups: [
            {
                id: 1,
                type: 'director',
                name: 'Хоакин Феникс',
                ENname: 'JoaquinPhoenix'
            },
            {
                id: 2,
                type: 'screenwriter',
                name: 'Хоакин Феникс',
                ENname: 'JoaquinPhoenix'
            },
            {
                id: 3,
                type: 'actor',
                name: 'Хоакин Феникс',
                ENname: 'JoaquinPhoenix'
            },
            {
                id: 4,
                type: 'actor',
                name: 'Хоакин Феникс',
                ENname: 'JoaquinPhoenix'
            },
            {
                id: 5,
                type: 'actor',
                name: 'Хоакин Феникс',
                ENname: 'JoaquinPhoenix'
            }
        ]
    })

}
</script>