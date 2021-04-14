<template>
    <v-card elevation="6" class="mx-auto" max-width="700">
        <v-card-text>
            <p class="text-h4 text--primary">{{ prefecture.name }}</p>
            <p>{{ prefecture.intro }}</p>
        </v-card-text>
        <v-card-actions class="d-flex justify-space-around">
            <v-btn text v-for="(button, i) in buttons" :key="i">
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
