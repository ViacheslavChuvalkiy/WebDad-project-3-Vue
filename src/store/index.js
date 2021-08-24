import Vue from 'vue'
import Vuex from 'vuex'
import {v4 as uuidv4} from 'uuid';

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
    activeFilter: 'all',
    activeTask: 0,
    completedTask: 0,
  },
  getters: {
    listTasks({tasksList, activeFilter}) {
      switch (activeFilter) {
        case 'active' :
          tasksList = tasksList.filter((item) => !item.isChecked);
          return tasksList;
        case 'completed' :
          tasksList = tasksList.filter((item) => item.isChecked);
          return tasksList;
        default :
          return tasksList;
      }
    },
    countTask({tasksList}) {
      return tasksList.length;
    },
    countActiveTask({activeTask}) {
      return activeTask;
    },
    countCompletedTask({completedTask}) {
      return completedTask;
    },
    filterList({filters}) {
      return filters;
    },
    getActiveFilter({activeFilter}) {
      return activeFilter;
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
        filter.value === value ? {...filter, filter: true} : {...filter, filter: false}
      );
    },
    saveDataLocalStorage({tasksList}) {
      localStorage.setItem('tasksList', JSON.stringify(tasksList));
    },
    getTasksFromLocalStorage(state) {
      if (localStorage.tasksList) {
        try {
          state.tasksList = JSON.parse(localStorage.getItem('tasksList'));
        } catch (e) {
          localStorage.removeItem('tasksList');
        }
      }
    },
    countFilteredTask(state) {
      state.activeTask = state.tasksList.filter(task => !task.isChecked).length;
      state.completedTask = state.tasksList.filter(task => task.isChecked).length;
    }
  },
  actions: {}
})