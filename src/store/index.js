import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        prefectures: {},
    },
    mutations: {
        setup(state, prefectures) {
            state.prefectures = prefectures;
        },
    },
    actions: {},
    modules: {},
});
