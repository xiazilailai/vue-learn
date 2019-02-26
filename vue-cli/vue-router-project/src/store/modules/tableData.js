// 
const state = {
    tableData: [1,2,3,4,5,6,7,8],
    counter: 9
};

const getters = {
    getTableData(state){
        return state.tableData;
    }
};

const mutations = {
    addToTableData(state, row){
        state.tableData.push(row);
    },
    deleteTableDataItem(state, index){
        state.tableData.splice(index,1);
    },
    updateTableDataItem(state, index, row){
        state.tableData.splice(index, 1, row);
    }
};

const actions = {
    addTableRow(contxt){
        contxt.commit("addToTableData", state.counter);
        state.counter ++;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}