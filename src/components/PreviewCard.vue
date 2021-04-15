<template>
    <v-card
        elevation="6"
        :class="sm ? 'mx-auto' : 'desktopCard'"
        :max-width="sm ? 700 : 300"
    >
        <v-img
            v-if="!sm"
            :src="prefecture.image.large"
            :lazy-src="prefecture.image.normal"
        ></v-img>
        <v-card-text class="text-center">
            <p class="text-h4 text--primary">{{ p.name }}</p>
            <p>{{ prefecture.intro }}</p>
            <div :class="sm && 'd-flex justify-space-around'">
                <p class="text-left" v-for="(field, i) in fields" :key="i">
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
        pref: {
            type: String,
            default: "JP-02",
        },
    },
    // TODO: Prefecture data will be stored in the vuex later
    data() {
        return {
            sm: false,
            // pref: {},
            p: this.$store.state.prefectures[this.pref],
            prefecture: {
                name: "Аомори",
                intro:
                    "Аомори - префектура, расположенная на севере острова Хонсю, центром является одноимённый город Аомори.",
                image: {
                    large: "https://i.ibb.co/XSmbqk2/maxresdefault.jpg",
                    normal: "https://i.ibb.co/hDpyS17/maxresdefault.jpg",
                },
            },
            fields: [
                {
                    name: "Блюдо",
                    icon: "$food",
                    value: "Басаси",
                },
                {
                    name: "Культура",
                    icon: "$sightseeings",
                    value: "Замок Хиросаки",
                },
                {
                    name: "Диалект",
                    icon: "$language",
                    value: "Цугару-бэн",
                },
            ],
        };
    },
    created() {
        this.sm = window.innerWidth < 960;
        window.addEventListener("resize", () => {
            this.sm = window.innerWidth < 960;
        });
        console.log(this.p);
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
