<template>
    <v-card
        elevation="6"
        :class="sm ? 'mx-auto' : 'desktopCard'"
        :max-width="sm ? 700 : 300"
    >
        <v-img
            v-if="!sm"
            :src="prefecture.preview.image.large"
            :lazy-src="prefecture.preview.image.small"
        ></v-img>
        <v-card-text class="text-center">
            <p class="text-h4 text--primary">{{ prefecture.name }}</p>
            <p>{{ prefecture.preview.intro }}</p>
            <div :class="sm && 'd-flex justify-space-around'">
                <p
                    class="text-left"
                    :class="sm && 'd-flex flex-column align-center'"
                    v-for="(field, i) in fields"
                    :key="i"
                >
                    <v-icon small left>{{ field.icon }}</v-icon>
                    <span v-if="!sm" class="font-weight-bold"
                        >{{ field.name }}:</span
                    >
                    {{ field.value }}
                </p>
            </div>
        </v-card-text>
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
    computed: {
        fields() {
            return [
                {
                    name: "Блюдо",
                    icon: "$food",
                    value: this.prefecture.preview.food,
                },
                {
                    name: "Культура",
                    icon: "$sightseeings",
                    value: this.prefecture.preview.culture,
                },
                {
                    name: "Диалект",
                    icon: "$language",
                    value: this.prefecture.preview.dialect,
                },
            ];
        },
    },
};
</script>

<style lang="stylus" scoped>

.desktopCard
	position absolute
	right 10px
	top 50%
	transform translateY(-50%)
</style>
