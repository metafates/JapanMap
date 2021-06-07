import Vue from "vue";
import Vuex from "vuex";
import prefectures from "../prefectures/prefectures.json";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        prefectures: Object.freeze(prefectures),
    },
    mutations: {},
    actions: {},
    modules: {},
});
