<template>
    <div class="home">
        <PreviewCardMobile v-if="sm" />
        <PreviewCard v-else />
    </div>
</template>

<script>
// Preview Card
import PreviewCard from "../components/PreviewCards/PreviewCard.vue";
import PreviewCardMobile from "../components/PreviewCards/PreviewCardMobile.vue";

export default {
    name: "Home",
    components: {
        PreviewCard,
        PreviewCardMobile,
    },
    data() {
        return {
            sm: true,
        };
    },
    created() {
        this.sm = window.innerWidth < 960;
        window.addEventListener("resize", () => {
            this.sm = window.innerWidth < 960;
        });
    },
};
</script>
