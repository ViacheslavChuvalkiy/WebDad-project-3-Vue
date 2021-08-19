import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './modules/tasks'
import filter from './modules/filter'

Vue.use(Vuex);

export default new Vuex.Store({
  state:{},
  mutations:{},
  actions:{},
  modules:{
    tasks,
    filter
  }
})
