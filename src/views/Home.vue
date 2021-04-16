<template>
    <v-container fill-height fluid>
        <PreviewCard :prefecture="prefecture" />
        <PrefecturePage :prefecture="prefecture" :dialog="true" />
        <JapanMap />
    </v-container>
</template>

<script>
// Preview Card
import PreviewCard from "../components/PreviewCard";

// Prefecture Page
import PrefecturePage from "../components/PrefecturePage";

// Svg map
import JapanMap from "../components/JapanMap";

export default {
    name: "Home",
    components: {
        PreviewCard,
        PrefecturePage,
        JapanMap,
    },
    data() {
        return {
            prefecture: "JP-02",
        };
    },
};
</script>
