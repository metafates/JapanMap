import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import Food from "../components/icons/Food.vue";
import Culture from "../components/icons/Culture.vue";
import Language from "../components/icons/Language.vue";
// import foodIcon from "../assets/icons/japanese-food-with-chopsticks.svg"

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        values: {
            food: {
                component: Food,
            },
            culture: {
                component: Culture,
            },
            language: {
                component: Language,
            },
        },
    },
});
