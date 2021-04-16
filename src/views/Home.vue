<template>
    <v-container fill-height fluid>
        <PreviewCard :prefecture="prefecture" />
        <PreviewCardMisc :sm="sm" :prefecture="prefecture" />
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
// Preview Card (right)
import PreviewCard from "../components/PreviewCard";

// Preview Card with misc info (left; desktop only)
import PreviewCardMisc from "../components/PreviewCardMisc";

// Prefecture Page
import PrefecturePage from "../components/PrefecturePage";

// Svg map
import JapanMap from "../components/JapanMap";

export default {
    name: "Home",
    components: {
        PreviewCard,
        PreviewCardMisc,
        PrefecturePage,
        JapanMap,
    },
    data() {
        return {
            prefecture: this.$store.state.prefectures["JP-02"],
            dialog: false,
            sm: false,
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
    created() {
        this.sm = window.innerWidth < 960;
        window.addEventListener("resize", () => {
            this.sm = window.innerWidth < 960;
        });
    },
};
</script>
