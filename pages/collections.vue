<template>
    <div class="d-flex">
        <v-col
            cols="0"
            xl="2"
            v-if="
                !$vuetify.breakpoint.xs &&
                    !$vuetify.breakpoint.sm &&
                    !$vuetify.breakpoint.md &&
                    !$vuetify.breakpoint.lg
            "
        >
            <CollectionsList />
        </v-col>
        <v-col cols="12" xl="7" lg="9" class="pa-0">
            <SortListMob
                :type="'фильм'"
                :sortCollections="true"
                class="my-3"
                v-if="
                    $vuetify.breakpoint.xs ||
                        $vuetify.breakpoint.sm ||
                        $vuetify.breakpoint.md
                "
            />
            <SortList class="my-3" v-else />
            <div class="mt-4">
                <div
                    class="display-2 font-weight-bold"
                    :class="{
                        'title ml-2':
                            $vuetify.breakpoint.xs || $vuetify.breakpoint.sm,
                    }"
                >
                    Сейчас в кино
                </div>
                <FilmOrSerialCard2
                    class="mt-4"
                    v-for="n in 10"
                    :key="n"
                    :type="'фильм'"
                    :details="'hide'"
                />
            </div>
        </v-col>
        <v-col
            cols="0"
            lg="3"
            class="pa-0 pl-2"
            v-if="
                !$vuetify.breakpoint.xs &&
                    !$vuetify.breakpoint.sm &&
                    !$vuetify.breakpoint.md
            "
        >
            <CollectionsList v-if="$vuetify.breakpoint.lg" />
            <Filters :type="'фильм'" />
        </v-col>
    </div>
</template>

<script>
import CollectionsList from "../components/collections-components/collections-list"
import SortList from "../components/collection-components/SortList"
import FilmOrSerialCard2 from "../components/FilmOrSerialCard2"
import SortListMob from "../components/collection-components/SortListMob"
import Filters from "../components/collection-components/Filters"
export default {
    components: {
        FilmOrSerialCard2,
        SortList,
        SortListMob,
        Filters,
        CollectionsList,
    },
}
</script>
