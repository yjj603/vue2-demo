const blurRequired = {required: true, message: '此项必填', trigger: 'blur'}
/*const changeRequired = {required: true, message: '此项必填', trigger: 'change'}
const email = {type: 'email', message: '输入正确的邮箱格式', trigger: 'blur'}
const number = {
    validator: function (rule, value, callback) {
        if (!value) {
            callback()
        } else if (Number.isInteger(Number(value))) {
            callback()
        } else {
            callback(new Error('输入整数格式'))
        }
    },
    trigger: 'blur'
}*/
export default {
    state: {
        name: [blurRequired]
    }
}