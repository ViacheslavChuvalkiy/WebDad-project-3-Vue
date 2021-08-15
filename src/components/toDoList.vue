<template>
  <div class="todoList-container">
    <img src="@/assets/img/bg-note.png">
    <div class="todoList__title">
      <h2> to do list</h2>
    </div>
    <div class="todoList__block">
      <toDolistItem :toDoList="taskFilter" @deleteItem="onDeleteItem" @changeStatus="onChangeStatus"/>
      <toDolistNewTask @addNewTask="onAddNewTask"/>
    </div>
    <div class="todoList__footer">
      <toDolistFooter :tasks="taskInfo" @selectOption="onSelectOptions"/>
    </div>

  </div>
</template>

<script>
  import toDolistItem from "./toDolistItem";
  import toDolistNewTask from "./toDolistNewTask";
  import toDolistFooter from "./toDolistFooter";

  export default {
    name: "todoList-container",
    components: {
      toDolistItem,
      toDolistNewTask,
      toDolistFooter,
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
        let filter_status = this.filter_status;
        let newObj = {};

        if (filter_status === 'all') {
          newObj = this.todoList;
        }

        for (let prop in this.todoList) {

          let tempTask = this.todoList[prop];
          let task_count = Object.keys(newObj).length;

          switch (filter_status) {

            case "active":
              if (tempTask.status === 'active') {
                newObj[task_count + 1] = tempTask;
              }
              console.log(newObj)
              break;

            case "completed":
              if (tempTask.status === 'done') {
                newObj[task_count + 1] = tempTask;
              }
              break;
          }

        }
       // console.log(newObj)
        return newObj;
      },
    }

  }

</script>

<style lang="scss" scoped>

  @import 'src/assets/styles/vars.scss';

  .todoList-container {
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
      top: -1rem;
      left: 50%;
      opacity: 0.8;
      z-index: -1;
    }

    .todoList__title {
      width: 35rem;
      height: 3.1rem;
      text-align: center;
      background: $color_bg_brown;

      h2 {
        color: $color-text;
        font-size: 1.2rem;
        font-weight: 600;
        Line-height: 3.5rem;
      }
    }

    .todoList__block {
      padding: 2rem 0.5rem 2rem 0.5rem;
      background: $color_white;
    }
  }

</style>
