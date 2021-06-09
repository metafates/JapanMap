<template>
    <div class="logo">
        <div class="ml-5 mb-5">
            <p class="text-h2 text--primary">
                Карта <span class="red--text">Японии</span>
            </p>
            <p class="text-h4 text--secondary kanji">日本地図</p>
        </div>
        <Info />
    </div>
</template>

<script>
import Info from "./Info.vue";
export default {
    components: {
        Info,
    },
};
</script>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap')
.logo
    position absolute
    top 30px
    left 30px

.kanji
    font-family 'Noto Sans JP' !important
    font-weight 300
</style>
