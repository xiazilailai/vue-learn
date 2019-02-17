<template>
    <div class="side-nav">
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
    name: "SideNav",
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
    .side-nav{
        width: 200px;
        height: calc(100% - 80px);
        float: left;
        padding: 15px 0;
        border-right: 1px solid #ddd;
        /* background-color: beige; */
        background-color: lightcyan;
    }
    
    ul{
        padding: 0;
        margin: 0;
        height: 50px;
        /* overflow: hidden; */
        list-style: none;
    }
    li{
        /* float: left; */
        height: 50px;
        width: 200px;
        line-height: 50px;
        text-align: center;
        cursor: pointer;
        color: aqua;
    }
    li:hover{
        background-color: aquamarine;
    }
    li.active{
        background-color: aqua;
        color: #FFF;
    }
</style>


