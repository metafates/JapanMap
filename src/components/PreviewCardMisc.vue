<template>
    <v-card v-if="!sm" elevation="6" class="desktopCard" max-width="300">
        <v-list>
            <!-- <v-subheader>
                <v-icon left color="primary">mdi-map-marker-star</v-icon>
                <span class="text-subtitle-1 text--primary">Интересное</span>
            </v-subheader> -->
            <v-list-item v-for="(listItem, i) in prefecture.list" :key="i">
                <v-list-item-icon>
                    <v-icon color="primary">mdi-map-marker-star</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title
                        v-text="listItem.title"
                    ></v-list-item-title>
                    <v-list-item-subtitle v-text="listItem.description[0]">
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
export default {
    props: {
        prefecture: {
            type: Object,
        },
        sm: {
            type: Boolean,
            required: true,
        },
    },
};
</script>

<style scoped>
.desktopCard {
    position: absolute;
    left: 100px;
    top: 50%;
    transform: translateY(-50%);
}

@media screen and (max-width: 1500px) {
    .desktopCard {
        left: 10px;
    }
}
</style>
