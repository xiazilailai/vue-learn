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
                    <th>No.</th>
                    <th>HasError</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="n in 8" :key="n">
                    <td>John Potato</td>
                    <td>John Potato ...</td>
                    <td>2019/02/17</td>
                    <td>Yellow</td>
                    <td>20</td>
                    <td>Y</td>
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
        width: 100%;
        /* height: 100px; */
        padding: 15px;
    }
    h3{
        text-align: left;
    }
    table{
        border-collapse: collapse;
    }
    th,td{
        text-align: left;
        padding: 7px;
        border: 1px solid #ddd;
    }
</style>

