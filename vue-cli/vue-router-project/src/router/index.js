import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Home from "@/components/Home"
// import Nav from "@/components/Nav"
// import HeaderNav from "@/components/HeaderNav"
import AllComponentsDemo from "@/components/AllComponentsDemo"
import Table from "@/components/Table"
import Form from "@/components/Form"
import Dashboard from "@/components/Dashboard"

import Page404 from "@/components/Page404"

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: "/",
      name: "Home",
      alias: "/Home",
      component: Home,
      children: [
        {
          path: "",
          components: {
            // HeaderNav: HeaderNav,
            default: AllComponentsDemo
          }
        },
        {
          path: "Table",
          name: "Table",
          component: Table
        },
        {
          path: "Form",
          name: "Form",
          component: Form
        },
        {
          path: "Dashboard",
          name: "Dashboard",
          component: Dashboard
        }
      ]
    },
    {
      path: "*",
      name: "not found",
      component: Page404
    }
  ]
})
