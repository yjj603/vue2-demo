import myInput from "@/components/form/myInput";
import mySelect from "@/components/form/mySelect";
import mySelectRemote from "@/components/form/mySelectRemote";
function plugins (Vue) {
    Vue.component('myInput', myInput)
    Vue.component('mySelect', mySelect)
    Vue.component('mySelectRemote', mySelectRemote)
}
export default plugins