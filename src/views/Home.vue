<template>
    <div class="home">
        <PreviewCard :prefecture="prefecture" />
    </div>
</template>

<script>
// Preview Card
import PreviewCard from "../components/PreviewCard.vue";

export default {
    name: "Home",
    components: {
        PreviewCard,
    },
    data() {
        return {
            prefecture: "JP-02",
        };
    },
};
</script>
