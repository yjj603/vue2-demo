export default {
    data() {
        return {
            form: {}
        }
    },
    provide() {
        return {
            updateForm: (item, data) => {
                this.$set(this.form, item, data)
            },
            getForm: () => this.form
        }
    },
    methods: {
        is({type}) {
            return `my${type.replace(type[0], type[0].toUpperCase())}`
        },
        cancel() {
            window.history.go(-1)
        }
    }
}
