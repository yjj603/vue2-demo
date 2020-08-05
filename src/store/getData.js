import http from "@/plugin/axios";

const {axios} = http
const ci = ['location']
const state = {}, mutations = {}
ci.forEach(s => {
    state[s] = []
    mutations['save' + s] = function (state, data) {
        state[s] = data
    }
})
export default {
    state,
    actions: {
        getOption({commit}) {
            ci.forEach(async v => {
                let {data: {res}} = await axios.get(`${v}/get`)
                commit(`save${v}`, res || [])
            })
        },
        async getOneOption({commit, state}, {ci}) {
            if (ci in state) {
                const {data: {res}} = await axios.get(`${ci}/get`)
                commit(`save${ci}`, res || [])
            }

        }
    },
    mutations
}