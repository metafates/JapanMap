<template>
    <v-app>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
import prefectures from "./prefectures/prefectures.json";
export default {
    name: "App",
    created() {
        this.$store.commit("setup", Object.freeze(prefectures));
    },
};
</script>
