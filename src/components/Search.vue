<template>
    <v-autocomplete
        class="search"
        cache-items
        :items="items"
        hide-no-data
        hide-selected
        label="Найти префектуру"
        v-model="prefecture"
        prepend-icon="mdi-database-search"
    ></v-autocomplete>
</template>

<script>
export default {
    data() {
        return {
            prefecture: null,
            items: [],
            codes: {},
        };
    },
    created() {
        for (let prefecture in this.$store.state.prefectures) {
            if (!this.$store.state.prefectures[prefecture].main[0]) continue;

            const name = this.$store.state.prefectures[prefecture].name;

            this.codes[name] = prefecture;
            this.items.push(name);
        }
        this.items.sort();
    },
    watch: {
        prefecture(val) {
            this.$emit("prefselect", this.codes[val]);
        },
    },
};
</script>

<style scoped>
.search {
    position: absolute;
    top: 3rem;
    right: 5rem;
}
</style>
