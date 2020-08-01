import option from "@/store/data/option";

const def = {
    type: 'input',
    disabled: () => false,
    show: () => true,
    style: () => {
    },
    view(item) {
        return item[this.key] || ''
    },
    option() {
        if (this.type === 'select') {
            return option[this.key]
        } else {
            return []
        }
    },
    method: () => {
    },
    params: {
        label: 'name',
        value: 'id'
    },
}
const state = {
    id: {
        value: 'id'
    },
    name: {
        value: '设备名称',
    },
    organization: {
        value: '组织名称',
        type: 'select',
    }
}
Object.entries(state).forEach(v => {
    v[1].key = v[0]
    Object.keys(def).forEach(s => {
        if (!(s in v[1])) {
            v[1][s] = def[s]
        }
    })
})
export default {state}