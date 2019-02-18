<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">
                    <img alt="Brand" src="../assets/logo.png">
                </a>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li v-for="nav in navList" :key="nav.name">
                        <router-link :to="nav.name">{{nav.name}}</router-link>
                        <!-- <a href="">{{nav.name}}</a> -->
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "HeaderNav",
    data () {
        return {
            navList: [
                {name: "Home"},
                {name: "Dashboard"},
                {name: "Form"},
                {name: "Table"},
                {name: "Button"}
            ]
        }
    }
}
</script>

<style scoped>
    .navbar-brand img{
        height: 20px;
    }
</style>

