import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pageTransition: {
            name: "slide-up",
            mode: "in-out"
        },
        loaded: false
    },
    mutations: {
        setLoadedTrue(state) {
            state.loaded = true
        },
        setPageTransition(state, value) {
            if ("slide-up" === value) {
                Vue.set(state, "pageTransition", {
                    name: "slide-up",
                    mode: "in-out"
                });
            }
            if ("slide-down" === value) {
                Vue.set(state, "pageTransition", {
                    name: "slide-down",
                    mode: ""
                });
            }
            if ("slide-left" === value) {
                Vue.set(state, "pageTransition", {
                    name: "slide-left",
                    mode: "in-out"
                });
            }
            if ("slide-right" === value) {
                Vue.set(state, "pageTransition", {
                    name: "slide-right",
                    mode: ""
                });
            }
        }
    }
});
