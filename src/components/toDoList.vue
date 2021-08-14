<template>
  <div class="todoList-container">
    <img src="@/assets/img/bg-note.png">
    <div class="todoList__title">
      <h2> to do list</h2>
    </div>
    <div class="todoList__block">
      <toDolistItem :toDoList = "todoList"/>
      <toDolistNewTask />
    </div>
    <div class="todoList__footer">
      <toDolistFooter />
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
    data: () => ({
      todoList: {
        1: {
          text: 'Task 1',
          status: 'done',
          id: 'task1'
        },
        2: {
          text: 'Task 2',
          status: 'active',
          id: 'task2'
        },
        3: {
          text: 'Task 3',
          status: 'active',
          id: 'task3'
        }
      }
    })

  }

</script>

<style lang="scss" scoped>

  @import 'src/assets/styles/vars.scss';

  .todoList-container{
    max-width: 35rem;
    height: auto;
    margin: 0 auto;
    padding: 6rem 1rem 1rem 1rem;
    position: relative;
    font-family: $ff-main;
    z-index: 1;

    & img{
      position: absolute;
      width: 30rem;
      height: 40rem;
      top: -1rem;
      left: 50%;
      opacity: 0.8;
      z-index: -1;
    }

    .todoList__title{
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

    .todoList__block{
      padding: 2rem 0.5rem 2rem 0.5rem;
      background: $color_white;
    }
  }

</style>
