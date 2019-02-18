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
                    <td>20{{n}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "Table",
    data(){
        return {
            tableData: [1,2,3,4,5,6,7,8]
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
</style>

