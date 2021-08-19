<template>
  <div :class="$style.container">
    <img src="@/assets/img/bg-note.png">
    <div :class="$style.title">
      <h2> to do list</h2>
    </div>
    <div :class="$style.block">
      <ToDolistItem :toDoList="taskFilter" @deleteItem="onDeleteItem" @changeStatus="onChangeStatus"/>
      <ToDolistNewTask @addNewTask="onAddNewTask"/>
    </div>
    <ToDolistFooter :tasks="taskInfo" @selectOption="onSelectOptions"/>
  </div>
</template>

<script>
  import ToDolistItem from "./ToDolistItem";
  import ToDolistNewTask from "./ToDolistNewTask";
  import ToDolistFooter from "./ToDolistFooter";

  export default {
    components: {
      ToDolistItem,
      ToDolistNewTask,
      ToDolistFooter,
    },
    methods: {
      onDeleteItem(id) {
        this.$delete(this.todoList, id);
      },
      onChangeStatus(id) {
        this.todoList[id].status = this.todoList[id].status === "done" ? "active" : "done";
      },
      onAddNewTask(value) {
        let lastId = Number(Object.keys(this.todoList)[Object.keys(this.todoList).length - 1]);

        if (!lastId) {
          lastId = 0;
        }
        const newTask = {
          text: value,
          status: 'active',
          id: String(lastId + 1)
        };

        this.$set(this.todoList, newTask.id, newTask);
      },
      onSelectOptions(value) {
        this.filter_status = value;
      }
    },
    data: () => ({
      todoList: {
        1: {
          text: 'Task 1',
          status: 'done',
          id: '1'
        },
        2: {
          text: 'Task 2',
          status: 'active',
          id: '2'
        },
        3: {
          text: 'Task 3',
          status: 'active',
          id: '3'
        }
      },
      filter_status: 'all'
    }),
    computed: {
      taskInfo() {
        return {
          count: Object.values(this.todoList).reduce((acc) => acc + 1, 0),
          active: Object.values(this.todoList).reduce((acc, item) => item.status === "done" ? acc + 1 : acc, 0)
        }
      },
      taskFilter() {
        let filterStatus = this.filter_status;
        let newObj = {};

        if (filterStatus === 'all') {
          newObj = this.todoList;
        }

        for (let prop in this.todoList) {

          let tempTask = this.todoList[prop];
          let task_count = Object.keys(newObj).length;

          switch (filterStatus) {

            case "active":
              if (tempTask.status === 'active') {
                newObj[task_count + 1] = tempTask;
              }
              break;

            case "completed":
              if (tempTask.status === 'done') {
                newObj[task_count + 1] = tempTask;
              }
              break;
          }
        }
        return newObj;
      },
    }
  }
</script>

<style lang="scss" module>
  @import 'src/assets/styles/vars.scss';
  .container {
    max-width: 35rem;
    height: auto;
    margin: 0 auto;
    padding: 6rem 1rem 1rem 1rem;
    position: relative;
    font-family: $ff-main;
    z-index: 1;

    & img {
      position: absolute;
      width: 30rem;
      height: 40rem;
      top: 1rem;
      left: 50%;
      opacity: 0.8;
      z-index: -1;
    }

    .title {
      max-width: 35rem;
      min-height: 3.1rem;
      text-align: center;
      background: $color_bg_brown;

      h2 {
        color: $color-text;
        font-size: 1.2rem;
        font-weight: 600;
        margin: 0;
        padding: 0.7rem 0;
      }
    }

    .block {
      padding: 2rem 0;
      background: $color_white;

      & div :last-child {
        margin-bottom: 0;
      }
    }
  }

  @media (max-width: 1010px) {
    .container {
      & img {
        width: 25rem;
        height: 35rem;
      }
    }
  }

  @media (max-width: 820px) {
    .container {
      & img {
        width: 20rem;
        height: 33rem;
      }
    }
  }

  @media (max-width: 660px) {
    .container {
      max-width: 25rem;
      margin: 0 auto;
      padding: 4rem 0.5rem;
      & img {
        left: 43%;
      }
    }
  }

  @media (max-width: 600px) {
    .container {
      margin: 0 2rem 0 4rem;
      & img {
        left: 40%;
      }
    }
  }

  @media (max-width: 580px) {
    .container {
      margin: 0 auto;
      & img {
        display: none;
      }
    }
  }

  @media (max-width: 500px) {
    .container {
      max-width: 21rem;
      .title {
        max-width: 21rem;
        padding: 0;
      }

    }
  }


</style>
