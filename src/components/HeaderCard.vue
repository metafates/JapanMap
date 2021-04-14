<template>
    <v-card elevation="6" class="headerCard" max-width="300">
        <v-img
            class="enableBlur"
            :src="prefecture.image.large"
            :lazy-src="prefecture.image.normal"
        >
        </v-img>
        <v-card-text class="text-center">
            <p class="text-h4 text--primary">{{ prefecture.name }}</p>
            <p>{{ prefecture.intro }}</p>
        </v-card-text>
        <v-card-actions class="d-flex flex-column">
            <v-btn class="my-2" text v-for="(button, i) in buttons" :key="i">
                <v-icon left>{{ button.icon }}</v-icon>
                {{ button.name }}
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    // TODO: Prefecture data will be stored in the vuex later
    data: () => ({
        prefecture: {
            name: "Okinava",
            intro:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi debitis molestias voluptatem sapiente praesentium dolorum. Dolorum dicta ea a nobis debitis beatae voluptates amet sit cum harum, suscipit, praesentium.",
            image: {
                large: "https://i.ibb.co/XSmbqk2/maxresdefault.jpg",
                normal: "https://i.ibb.co/hDpyS17/maxresdefault.jpg",
            },
        },
        buttons: [
            {
                name: "Food",
                icon: "$food",
            },
            {
                name: "Sightseeings",
                icon: "$sightseeings",
            },
            {
                name: "Language",
                icon: "$language",
            },
        ],
    }),
};
</script>

<style lang="stylus" scoped>
.headerCard
	position absolute
	right 10px
	top 50%
	transform translateY(-50%)

.enableBlur
	filter blur(1.2px)
</style>
