const obj = {
    location: {
        name: '地理位置'
    },
    datacenter:{
        name:'数据中心'
    },
    cabinet:{
        name:'机柜'
    },
    server:{
        name:'服务器'
    },
}
const arr = Object.entries(obj).map(v=>({
    key:v[0],
    ...v[1]
}))
export default {
    state:{
        obj,
        arr
    }
}