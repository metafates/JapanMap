<template>
    <v-card elevation="6" class="mx-auto" max-width="700">
        <v-card-text class="text-center">
            <p class="text-h4 text--primary">{{ prefecture.name }}</p>
            <p>{{ prefecture.intro }}</p>
        </v-card-text>
        <v-card-actions class="flex justify-space-around">
            <v-btn
                :icon="xs"
                class="my-2"
                text
                v-for="(button, i) in buttons"
                :key="i"
            >
                <v-icon left>{{ button.icon }}</v-icon>
                {{ xs ? "" : button.name }}
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        xs: false,
        prefecture: {
            name: "Okinava",
            intro:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi debitis molestias voluptatem sapiente praesentium dolorum. Dolorum dicta ea a nobis debitis beatae voluptates amet sit cum harum, suscipit, praesentium.",
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
    created() {
        this.xs = window.innerWidth < 600;
        window.addEventListener("resize", () => {
            this.xs = window.innerWidth < 600;
        });
    },
};
</script>
