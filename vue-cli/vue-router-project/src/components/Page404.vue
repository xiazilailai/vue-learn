<template>
    <div class="container">
        <h3>404 not found</h3>
        <h2><a @click="back">back</a></h2>
    </div>
</template>

<script>
export default {
    name: "Page404",
    methods: {
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
    h2,h3{
        text-align: center;
    }
</style>

