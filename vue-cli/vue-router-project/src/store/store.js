import Vue from "vue";
import Vuex from "vuex";
// import navList from "./modules/navList"
import tableData from "./modules/tableData"

Vue.use(Vuex);

// 直接在store里初始化state getters mutations actions
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

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        tableData
    }
});

export default store;
