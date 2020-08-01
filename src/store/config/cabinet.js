import field from "@/store/field";

const {name, organization} = field.state
export default {
    show: [],
    create: [name, organization],
    update: [name, organization],
    table: [organization],
    search: [name]
}