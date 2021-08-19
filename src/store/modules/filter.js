import vue from "vue";

const filterStore = {
  namespaced:true,
  state:{
    filters : {
      1: {
        text: 'All',
        value: 'all',
        isChecked: true,
        id: '1'
      },
      2: {
        text: 'Active',
        value: 'active',
        isChecked: false,
        id: '2'
      },
      3: {
        text: 'Completed',
        value: 'completed',
        isChecked: false,
        id: '3'
      }
    },
    activeFilter : {
      active: 'all'
      }
  },
  getters:{
    filterList: ({filters}) =>  filters,
    getActiveFilter : ({activeFilter}) => activeFilter,
  },
  mutations:{
    CHANGE_ACTIVE_FILTER(state,id){
      let actFilter = state.activeFilter[0];
      actFilter.active = state.filters[id].value;

      vue.set(state.activeFilter,0, actFilter);
    },
    CHANGE_FILTER(state,id){

      if(!state.filters[id].isChecked){
        state.filters[id].isChecked = true;
      }
      vue.set(state.filters,id,state.filters[id]);
    }
  },
  actions:{
    changeFilter({commit},id){
      commit('CHANGE_FILTER',id);
    },
    changeActiveFilter({commit},id){
      commit('CHANGE_ACTIVE_FILTER',id);
    },
  }
};

export default filterStore;