import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    tasksList: [
      {
        text: 'Task 1',
        isChecked: true,
        id: '0'
      },
      {
        text: 'Task 2',
        isChecked: false,
        id: '1'
      },
      {
        text: 'Task 3',
        isChecked: false,
        id: '2'
      },
    ],
    filters: [
      {
        text: 'All',
        value: 'all',
        isChecked: true,
        id: '0'
      },
      {
        text: 'Active',
        value: 'active',
        isChecked: false,
        id: '1'
      },
      {
        text: 'Completed',
        value: 'completed',
        isChecked: false,
        id: '2'
      }
    ],
    activeFilter : 'all'
  },
  getters:{
    listTasks({tasksList,activeFilter}) {
      switch (activeFilter) {
        case 'active' :
          return tasksList.filter((item) => !item.isChecked)
        case 'completed' :
          return tasksList.filter((item) => item.isChecked);
        default :
          return tasksList;
      }
    } ,
    countTask({tasksList}) {
      return tasksList.length;
    },
    countActiveTask({tasksList}) {
      return tasksList.filter((item) => !item.isChecked).length;
    },
    filterList({filters}) {
      return filters;
    }
  },
  mutations:{
    addNewTask(state, task) {
        let lastId = state.tasksList.length;
        if (!lastId) {
          lastId = 0;
        }
        const newTask = {
          text: task,
          isChecked: false,
          id: String(lastId)
        };

       state.tasksList.push(newTask);
    },
    deleteTask(state, id) {
      state.tasksList = state.tasksList.filter((task) => task.id !== id);
    },
    changeStatusTask(state, id) {
      state.tasksList = state.tasksList.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      );
    },
    changeActiveFilter(state, id) {
      state.activeFilter = state.filters[id].value;
    },
  },
  actions:{}
})
