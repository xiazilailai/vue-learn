<template>
    <div class="container-fluid">
        <h3>Table</h3>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>HasJack</th>
                    <th>No.</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="n in tableData" :key="n">
                    <td>John Potato</td>
                    <td>John Potato ...</td>
                    <td>2019/02/17</td>
                    <td>Yellow</td>
                    <td>{{n % 3 === 0 ? "Y12345" : "N54321"}}</td>
                    <td>{{20 + n}}</td>
                </tr>
            </tbody>
        </table>
        <div class="btn-bar">
            <button class="btn btn-sm btn-default" @click="addRow">add row</button>
        </div>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'

export default {
    name: "Table",
    data(){
        return {
            // tableData: [1,2,3,4,5,6,7,8],
            counter: 9
        }
    },
    computed: {
        // 下面写法结果都一样  
        // ...mapState({
        //     tableData: state => state.tableData.tableData
        // }),
        // ...mapState("tableData",{
        //     tableData: state => state.tableData
        // }),
        // ...mapGetters("tableData", {
        //     tableData: "getTableData"
        // }),
        tableData: function(){           
            return this.$store.getters["tableData/getTableData"];
        }
    },
    methods: {
        // 下面写法结果都一样  
        // ...mapActions({
        //     "addRow" : "tableData/addTableRow"
        // }),
        // ...mapActions("tableData", {
        //     "addRow" : "addTableRow"
        // }),
        addRow: function(){
            this.$store.dispatch("tableData/addTableRow");
        }
    }
}
</script>

<style scoped>
    h3{
        text-align: left;
    }
    table{
        border-collapse: collapse;
        width: 100%;
    }
    th,td{
        text-align: left;
        padding: 7px;
        border: 1px solid #ddd;
    }
    .btn-bar{
        padding: 15px 0;
        /* text-align: right; */
    }
    .btn-bar .btn{
        width: 80px;
    }
</style>

