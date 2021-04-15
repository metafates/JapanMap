<template>
    <v-container fluid>
        <PreviewCard :prefecture="prefecture" />
        <PrefecturePage :prefecture="prefecture" :dialog="true" />
    </v-container>
</template>

<script>
// Preview Card
import PreviewCard from "../components/PreviewCard";

// Prefecture Page
import PrefecturePage from "../components/PrefecturePage";

export default {
    name: "Home",
    components: {
        PreviewCard,
        PrefecturePage,
    },
    data() {
        return {
            prefecture: "JP-02",
        };
    },
};
</script>
