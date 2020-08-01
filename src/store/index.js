import Vue from 'vue'
import Vuex from 'vuex'
import route from './route'
import pool from './pool'
import field from "@/store/field";
import config from "@/store/config";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        route,
        pool,
        field,
        config
    }
})
