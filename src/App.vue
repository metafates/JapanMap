<template>
    <v-app>
        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import prefectures from "./prefectures/prefectures";
export default {
    name: "App",
    created() {
        this.$store.commit("setup", prefectures);
    },
};
</script>
