<template>
    <div class="container-fluid all-components-box">
        <div class="component-box">
            <Dashboard />
        </div>
        <div class="component-box">
            <Table />
        </div>
        <div class="component-box">
            <Form />
        </div>
    </div>
</template>

<script>
import Table from "@/components/Table"
import Form from "@/components/Form"
import Dashboard from "@/components/Dashboard"

export default {
    name: "AllComponentsDemo",
    components: {
        Dashboard,
        Table,
        Form
    }
}
</script>

<style scoped>
    .all-components-box{
        overflow: auto;
    }
    .component-box{
        padding: 10px;
        margin-bottom: 15px;
    }
</style>

