<template>
    <v-container fill-height fluid>
        <LogoDesktop v-if="!sm" />
        <PreviewCard
            v-show="hovered"
            @open="openPrefecturePage"
            :sm="sm"
            :prefecture="prefecture"
        />
        <PreviewCardMisc v-show="hovered" :sm="sm" :prefecture="prefecture" />
        <PrefecturePage
            @close="closePrefecturePage"
            :prefecture="prefecture"
            :dialog="dialog"
        />
        <JapanMap
            :sm="sm"
            @hover="setPrefecture($event)"
            @hoverleave="hoverleave"
            @open="openPrefecturePage"
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

// Logo
import LogoDesktop from "../components/LogoDesktop";

export default {
    name: "Home",
    components: {
        PreviewCard,
        PreviewCardMisc,
        PrefecturePage,
        JapanMap,
        LogoDesktop,
    },
    data() {
        return {
            prefecture: this.$store.state.prefectures["JP-02"],
            dialog: false,
            sm: false,
            hovered: false,
        };
    },
    methods: {
        setPrefecture(prefecture) {
            if (this.dialog) return;

            this.hovered = true;
            this.dialog = false;
            this.prefecture =
                this.$store.state.prefectures[prefecture] || this.prefecture;
        },
        hoverleave() {
            this.hovered = this.sm && true;
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
        this.hovered = this.sm;
        window.addEventListener("resize", () => {
            this.sm = window.innerWidth < 960;
        });
    },
};
</script>
