import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Header from "../public/header.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/header",
            name: "Header",
            component: Header,
        },
    ],
})
