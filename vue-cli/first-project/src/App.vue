<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Nav :navList="navList"/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <SideNav :navList="navList"/>
    <treeTable :list="tableData"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Nav from "./components/Nav.vue"
import SideNav from "./components/SideNav.vue"
import TreeTable from "./components/TreeTable.vue"

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Nav,
    SideNav,
    TreeTable
  },
  data: function(){
    return {
      navList: [
        {id: 1, text: "Index"},
        {id: 2, text: "Dashboard"},
        {id: 3, text: "TreeTable"},
      ],
      tableData: [1,2,3,4,5,6,7,8]
    };
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
  position: absolute;
  height: 100%;
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
