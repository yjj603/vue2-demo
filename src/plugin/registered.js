import myComponent from "@/components/form/myComponent";
import myInput from "@/components/form/myInput";
import mySelect from "@/components/form/mySelect";
function plugins (Vue) {
    Vue.component('myComponent', myComponent)
    Vue.component('myInput', myInput)
    Vue.component('mySelect', mySelect)
}
export default plugins