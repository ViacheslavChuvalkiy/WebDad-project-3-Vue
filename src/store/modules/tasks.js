import vue from 'vue'

const tasksStore = {
  namespaced: true,
  state: {
    tasksList: {
      1: {
        text: 'Task 1',
        isChecked: true,
        id: '1'
      },
      2: {
        text: 'Task 2',
        isChecked: false,
        id: '2'
      },
      3: {
        text: 'Task 3',
        isChecked: false,
        id: '3'
      },
    }
  },
  getters: {
    listTasks: ({tasksList}) =>
      tasksList,
    countTask: ({tasksList}) =>
      Object.values(tasksList).length,
    countActiveTask: ({tasksList}) =>
      Object.values(tasksList).filter((item) => item.status === 'active').length
  },
  mutations: {
    ADD_Task(state, task) {
      vue.set(state.tasksList, task.id, task);
    },
    DEL_Task(state, id) {
      vue.delete(state.tasksList, state.tasksList[id].id);
    },
    CHANGE_STATUS_Task(state, task) {
      vue.set(state.tasksList, task.id, task);
    }
  },
  actions: {
    addNewTask({commit, state}, task) {
      let lastId = Number(Object.keys(state.tasksList)[Object.keys(state.tasksList).length - 1]);
      if (!lastId) {
        lastId = 0;
      }
      const newTask = {
        text: task,
        isChecked: false,
        id: String(lastId + 1)
      };
      commit('ADD_Task', newTask);
    },
    delTask({commit}, id) {
      commit('DEL_Task', id);
    },
    changeStatusTask({commit, state}, id) {
      let task = state.tasksList[id];
      task.status = task.status === 'completed' ? 'active' : 'completed';
      commit('CHANGE_STATUS_Task', task);
    },
  }
};
export default tasksStore;