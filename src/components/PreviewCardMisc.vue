<template>
    <transition name="fade">
        <v-card
            :key="prefecture.name"
            v-if="!sm && isValidPref"
            elevation="6"
            class="desktopCard"
            max-width="300"
        >
            <v-list>
                <v-list-item v-for="(listItem, i) in prefecture.list" :key="i">
                    <v-list-item-icon>
                        <v-icon color="primary">mdi-map-marker-star</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title
                            v-text="listItem.title"
                        ></v-list-item-title>
                        <v-list-item-subtitle
                            v-text="listItem.address || listItem.description[0]"
                        >
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </transition>
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
    computed: {
        isValidPref() {
            return this.prefecture.list[0].title;
        },
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

.desktopCard {
    position: absolute;
    left: 100px;
    top: 60%;
    transform: translateY(-50%);
}

@media screen and (max-width: 1500px) {
    .desktopCard {
        left: 10px;
    }
}
</style>
