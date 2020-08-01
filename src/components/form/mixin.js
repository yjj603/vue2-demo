export default {
  props: {
    value: {},
    item: {}
  },
  watch: {
    'value': {
      immediate: true,
      handler: function (n) {
        this.value_ = n
      }
    }
  },
  data () {
    return {
      value_: this.value
    }
  }
}
