<template>
    <v-container fill-height fluid>
        <PreviewCard :prefecture="prefecture" />
        <PrefecturePage
            @close="closePrefecturePage"
            :prefecture="prefecture"
            :dialog="dialog"
        />
        <JapanMap
            @hover="setPrefecture($event)"
            @clicked="openPrefecturePage"
        />
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
            prefecture: this.$store.state.prefectures["JP-02"],
            dialog: false,
        };
    },
    methods: {
        setPrefecture(prefecture) {
            if (this.dialog) return;

            this.dialog = false;
            this.prefecture =
                this.$store.state.prefectures[prefecture] || this.prefecture;
        },
        openPrefecturePage() {
            this.dialog = true;
        },
        closePrefecturePage() {
            this.dialog = false;
        },
    },
};
</script>
