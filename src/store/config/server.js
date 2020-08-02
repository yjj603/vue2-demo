import field from "@/store/field";

const {name, organization,location} = field.state
export default {
    show: [],
    create: [name, organization,location],
    update: [name, organization,location],
    table: [organization,location],
    search:[name,organization]
}