<template>
    <div class="tree-table">
        <h3>TreeTable</h3>
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
                <tr v-for="n in list" :key="n">
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
    name: "TreeTable",
    props: ["list"]
}
</script>

<style scoped>
    .tree-table{
        box-sizing: border-box;
        width: calc(100% - 200px);
        height: calc(100% - 50px);
        float: left;
        padding: 15px;
    }
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

