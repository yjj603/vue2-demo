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
        value: '_id'
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
        params: {
            label: 'name',
            value: 'name'
        },
    },
    location: {
        value: '地理位置',
        type: 'selectRemote',
        view(item) {
            return item[this.key] ? item[this.key].name : ''
        },
        disabled(val){
            return  !val.organization
        }
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