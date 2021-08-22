import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    tasksList: [
      {
        text: 'Task 1',
        isChecked: true,
        id: uuidv4(),
      },
      {
        text: 'Task 2',
        isChecked: false,
        id: uuidv4(),
      },
      {
        text: 'Task 3',
        isChecked: false,
        id: uuidv4(),
      },
    ],
    filters: [
      {
        text: 'All',
        value: 'all',
        isChecked: true,
        id: uuidv4(),
      },
      {
        text: 'Active',
        value: 'active',
        isChecked: false,
        id: uuidv4(),
      },
      {
        text: 'Completed',
        value: 'completed',
        isChecked: false,
        id: uuidv4(),
      }
    ],
    activeFilter: 'all'
  },
  getters: {
    listTasks({tasksList, activeFilter}) {
      switch (activeFilter) {
        case 'active' :
          return tasksList.filter((item) => !item.isChecked);
        case 'completed' :
          return tasksList.filter((item) => item.isChecked);
        default :
          if(localStorage.tasksList){
            try {
              tasksList = JSON.parse(localStorage.getItem('tasksList'));
            } catch(e) {
              localStorage.removeItem('tasksList');
            }

            console.log(tasksList);
            return tasksList;
          }
          else {
            return tasksList;
          }

      }
    },
    countTask({tasksList}) {
      console.log(tasksList);
      return tasksList.length;
    },
    countActiveTask({tasksList}) {
      console.log(tasksList);
      return tasksList.filter((item) => !item.isChecked).length;
    },
    filterList({filters}) {
      return filters;
    }
  },
  mutations: {
    addNewTask(state, task) {
      if (task) {
        const newTask = {
          text: task,
          isChecked: false,
          id: uuidv4(),
        };
        state.tasksList.push(newTask);
      }
    },
    deleteTask(state, id) {
      state.tasksList = state.tasksList.filter((task) => task.id !== id);
    },
    changeStatusTask(state, id) {
      state.tasksList = state.tasksList.map((task) =>
        task.id === id ? {...task, isChecked: !task.isChecked} : task
      );
    },
    changeActiveFilter(state, value) {
      state.activeFilter = value;
      state.filters = state.filters.map((filter) =>
        filter.value === value? {...filter, filter: true} : {...filter, filter: false}
      );
    },
    saveDataLocalStorage({tasksList}){
      console.log(tasksList);
      localStorage.setItem('tasksList',JSON.stringify(tasksList));
    }
  },
  actions: {}
})
