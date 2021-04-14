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
import fetcher from "./utils/fetcher";
export default {
    name: "App",

    components: {},

    data: () => ({
        //
    }),
    // Fetch api for prefectures and then set them in the vuex
    async created() {
        const prefectures = await fetcher();
        this.$store.commit("setup", prefectures);
    },
};
</script>
