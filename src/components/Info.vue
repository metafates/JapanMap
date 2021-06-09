<template>
    <div>
        <v-row no-gutters>
            <v-col
                v-for="(region, i) in regions"
                :key="i"
                cols="3"
                class="d-flex justify-center align-center flex-column my-3"
            >
                <div class="circle" :class="region.className"></div>
                <span class="text-subtitle-1">{{ region.title }}</span>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            regions: [
                { title: "Хоккайдо", color: "#4d66ac", className: "st7" },
                { title: "Тохоку", color: "#4a9ddb", className: "st1" },
                { title: "Канто", color: "#4bb2ba", className: "st2" },
                { title: "Тюбу", color: "#52af8c", className: "st0" },
                { title: "Кансай", color: "#8fc05b", className: "st6" },
                { title: "Тюгоку", color: "#ecb15c", className: "st8" },
                { title: "Сикоку", color: "#f2ed72", className: "st3" },
                { title: "Кюсю", color: "#e08a66", className: "st4" },
            ],
        };
    },
};
</script>

<style scoped>
.circle {
    width: 30px;
    height: 30px;
    border-radius: 8px;
}

.st0 {
    background-color: #52af8c;
}
.st1 {
    background-color: #4a9ddb;
}
.st2 {
    background-color: #4bb2ba;
}
.st3 {
    background-color: #f2ed72;
}
.st4 {
    background-color: #e08a66;
}
.st5 {
    background-color: #4bb2ba;
}
.st6 {
    background-color: #8fc05b;
}
.st7 {
    background-color: #4d66ac;
}
.st8 {
    background-color: #ecb15c;
}
.st9 {
    background-color: #a070ac;
}
</style>
