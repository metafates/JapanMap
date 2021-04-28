<template>
    <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
            <v-speed-dial absolute bottom right>
                <template v-slot:activator>
                    <v-btn
                        v-bind="attrs"
                        v-on="on"
                        @click="openRandomPrefecture"
                        color="primary"
                        fab
                    >
                        <v-icon>
                            mdi-dice-multiple
                        </v-icon>
                    </v-btn>
                </template>
            </v-speed-dial>
        </template>
        <span>Случайная префектура</span>
    </v-tooltip>
</template>

<script>
export default {
    methods: {
        openRandomPrefecture() {
            this.$emit("random");
        },
    },
};
</script>
