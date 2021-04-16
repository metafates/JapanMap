<template>
    <v-dialog
        v-model="isOpen"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
    >
        <v-card>
            <v-btn
                @click="isOpen = false"
                fixed
                color="primary"
                right
                bottom
                fab
                x-large
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-img
                :src="p.preview.image.large"
                class="bannerImage"
                height="200"
            ></v-img>
            <v-card-text class="mt-10 limitedWidth mx-auto text-center">
                <p class="text-h3 text--primary text-center font-weight-bold">
                    {{ p.name }}
                </p>
                <p class="text-h5 text-center">
                    {{ p.preview.intro }}
                </p>
                <v-row justify="center" class="my-10">
                    <div class="d-flex" v-for="(field, i) in fields" :key="i">
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <div
                                    v-on="on"
                                    v-bind="attrs"
                                    class="d-flex flex-column mx-10 my-5 align-center"
                                >
                                    <v-icon x-large>{{ field.icon }}</v-icon>
                                    <span class="text-h6 mt-3">{{
                                        field.value
                                    }}</span>
                                </div>
                            </template>
                            <span>{{ field.name }}</span>
                        </v-tooltip>
                    </div>
                </v-row>
                <p
                    class="text-h5"
                    v-for="(paragraph, i) in p.main"
                    :key="'A' + i"
                >
                    {{ paragraph }}
                </p>

                <div
                    class="paragraph"
                    v-for="(listItem, i) in p.list"
                    :key="'B' + i"
                >
                    <p class="text-h4 mb-10 font-weight-bold">
                        {{ listItem.title }}
                    </p>
                    <p
                        v-for="(paragraph, i) in listItem.description"
                        :key="'C' + i"
                        class="text-h5"
                    >
                        {{ paragraph }}
                    </p>
                    <v-img
                        :src="listItem.image"
                        class="rounded-xl mx-auto my-10"
                        width="700"
                    ></v-img>
                </div>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        dialog: {
            type: Boolean,
            default: false,
        },
        prefecture: {
            type: String,
            default: "JP-01",
        },
    },
    data() {
        return {
            isOpen: this.dialog,
            p: this.$store.state.prefectures[this.prefecture],
        };
    },
    computed: {
        fields() {
            return [
                {
                    name: "Блюдо",
                    icon: "$food",
                    value: this.p.preview.food,
                },
                {
                    name: "Культура",
                    icon: "$sightseeings",
                    value: this.p.preview.culture,
                },
                {
                    name: "Диалект",
                    icon: "$language",
                    value: this.p.preview.dialect,
                },
            ];
        },
    },
};
</script>

<style lang="stylus" scoped>
.paragraph
    margin-top: 10rem
    margin-bottom: 10rem

.limitedWidth
    max-width: 1000px

.bannerImage
    filter: blur(5px)
</style>
