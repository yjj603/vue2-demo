export default {
  props: {
    item: {}
  },
  inject:['updateForm','getForm'],
  computed: {
    form() {
      return this.getForm()
    }
  },
}
