<template>
    <div class="nav">
        <ul>
            <li 
                v-for="(nav, index) in navList" 
                :key="index"
                @click="changeActive(index)"
                :class="{active: index === activeIndex}"
            >
                {{nav.text}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Nav",
    props: ["navList"],
    data: function(){
        return {
            activeIndex: 0
        };
    },
    methods: {
        changeActive: function(index){
            this.activeIndex = index;
        }
    }
}
</script>

<style scoped>
    .nav{
        height: 50px;
        padding: 0 15px;

    }
    ul{
        padding: 0;
        margin: 0;
        height: 50px;
        overflow: hidden;
        list-style: none;
    }
    li{
        float: left;
        height: 50px;
        width: 120px;
        line-height: 50px;
        text-align: center;
        cursor: pointer;
    }
    li:hover{
        background-color: aquamarine;
    }
    li.active{
        background-color: aqua;
        color: #FFF;
    }
</style>



