import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        prefectures: {},
        loading: true,
    },
    mutations: {
        setup(state, prefectures) {
            state.prefectures = prefectures;
            state.loading = false;
        },
    },
    actions: {},
    modules: {},
});
