<template>
    <v-dialog
        @click:outside="closeDialog"
        @keydown="closeDialog"
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
    >
        <v-card>
            <v-btn
                @click="closeDialog"
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
                :src="prefecture.preview.image.large"
                :lazy-src="prefecture.preview.image.small"
                class="bannerImage elevation-10"
                height="200"
            ></v-img>
            <v-card-text class="mt-10 limitedWidth mx-auto text-center">
                <p class="text-h3 text--primary text-center font-weight-bold">
                    {{ prefecture.name }}
                </p>
                <p class="text-h5 text-center">
                    {{ prefecture.preview.intro }}
                </p>
                <v-row justify="center" class="my-10">
                    <div class="d-flex" v-for="(field, i) in fields" :key="i">
                        <div v-if="field.value">
                            <v-tooltip top>
                                <template v-slot:activator="{ on, attrs }">
                                    <div
                                        v-on="on"
                                        v-bind="attrs"
                                        class="d-flex flex-column mx-10 my-5 align-center"
                                    >
                                        <v-icon x-large>{{
                                            field.icon
                                        }}</v-icon>
                                        <span class="text-h6 mt-3">{{
                                            field.value
                                        }}</span>
                                    </div>
                                </template>
                                <span>{{ field.name }}</span>
                            </v-tooltip>
                        </div>
                    </div>
                </v-row>
                <p
                    class="text-h5"
                    v-for="(paragraph, i) in prefecture.main"
                    :key="'A' + i"
                >
                    {{ paragraph }}
                </p>

                <div
                    class="paragraph"
                    v-for="(listItem, i) in prefecture.list"
                    :key="'B' + i"
                >
                    <p class="text-h4 mb-5 font-weight-bold">
                        {{ listItem.title }}
                    </p>
                    <p class="text-subtitle-1">{{ listItem.address }}</p>
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
            type: Object,
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
                    icon: "$culture",
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
    methods: {
        closeDialog() {
            this.$emit("close");
            // Scroll back to the top of page after closing
            document.querySelector(".v-dialog--fullscreen").scrollTop = 0;
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
