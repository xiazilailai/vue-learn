<template>
    <div class="home">
        <header class="header">
            <!-- <router-view name="HeaderNav"></router-view> -->
            <HeaderNav />
        </header>
        <main class="main">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>

import HeaderNav from "@/components/HeaderNav"

export default {
    name: "Home",
    components: { HeaderNav }
}
</script>

<style scoped>
    .home{
        width: 100%;
        height: 100%;
    }
    .header{
        height: 50px;
    }
    .main{
        height: calc(100% - 50px);
    }
</style>

