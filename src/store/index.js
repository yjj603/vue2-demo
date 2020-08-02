import Vue from 'vue'
import Vuex from 'vuex'
import pool from './pool'
import field from "@/store/field";
import config from "@/store/config";
import rules from "@/store/rules";
import getData from "@/store/getData"
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        pool,
        field,
        config,
        rules,
        getData
    }
})
