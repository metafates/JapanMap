<template>
    <v-container fill-height fluid>
        <LogoDesktop v-if="!sm" />
        <RandomPrefBtn @random="openRandomPrefecture" />
        <transition name="fade">
            <PreviewCard
                v-show="hovered"
                @open="openPrefecturePage"
                :sm="sm"
                :prefecture="prefecture"
            />
        </transition>
        <transition name="fade">
            <PreviewCardMisc
                v-show="hovered"
                :sm="sm"
                :prefecture="prefecture"
            />
        </transition>

        <PrefecturePage
            @close="closePrefecturePage"
            :prefecture="prefecture"
            :dialog="dialog"
        />
        <JapanMap
            :sm="sm"
            @hover="setPrefecture"
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

// Open Random Prefecture Page button
import RandomPrefBtn from "../components/RandomPrefBtn";

import randomPrefecture from "../utils/randomPrefecture";

export default {
    name: "Home",
    components: {
        PreviewCard,
        PreviewCardMisc,
        PrefecturePage,
        JapanMap,
        LogoDesktop,
        RandomPrefBtn,
    },
    data() {
        return {
            prefecture: this.$store.state.prefectures[randomPrefecture()],
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
        openRandomPrefecture() {
            this.prefecture = this.$store.state.prefectures[randomPrefecture()];
            this.openPrefecturePage();
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
