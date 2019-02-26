// 
const state = {
    navList: [
        {name: "Home"},
        {name: "Dashboard"},
        {name: "Form"},
        {name: "Table"},
        {name: "Button"}
    ]
};

const getters = {
    getNavList(state){
        return state.navList;
    }
};

const mutations = {
    addToNavList(state, nav){
        state.navList.push(nav);
    },
    deleteNavListItem(state, index){
        state.navList.splice(index,1);
    },
    updateNavListItem(state, index, nav){
        state.navList.splice(index, 1, nav);
    }
};

const actions = {
    addNav(contxt, nav){
        contxt.commit("addToNavList", nav);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}