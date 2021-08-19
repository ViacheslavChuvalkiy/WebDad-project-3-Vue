<template>
  <div>
    <template v-if="!isEmpty">
      <div :class="$style.listItem" v-for="(task) in toDoList" :key="task.id">
        <ToDoTask :ToDoTask = "task" />
        <p>{{task.text}}</p>
        <button :class="$style.btn" @click="deleteItem(task.id)"></button>
      </div>
    </template>
    <div v-else :class="$style.listEmpty">
      <h2>добавьте задачи к выполнению!!!</h2>
    </div>
  </div>
</template>

<script>
  import ToDoTask from "./ToDoTask";
  export default {
    props: {
      toDoList: {
        type: Object,
        default: () => ({})
      }
    },
    components: {
      ToDoTask,
    },
    computed: {
      isEmpty() {
        return !Object.keys(this.toDoList).length;
      }
    },
    methods: {
      deleteItem(id) {
        this.$emit("deleteItem", id);
      }
    }
  }
</script>

<style lang="scss" module>
  @import 'src/assets/styles/vars.scss';

  .listItem {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-width: 30rem;
    min-height: 3.1rem;
    margin: 0 2rem 2rem 2rem;
    text-align: center;
    border-radius: 10px;
    font-family: $ff-task;
    background: #FFDFBE;

    & p {
      text-align: left;
      flex: auto;
      word-break: break-all;
      margin: 0.3rem 1rem;
      font-weight: 400;
      font-size: 1.2rem;
      color: $color-text;
    }

    .btn {
      position: relative;
      width: 1.6rem;
      height: 1.6rem;
      margin-right: 1rem;
      background: transparent;
      color: $color-text;
      border: 1px solid $color_bg_brown;
      opacity: 0.8;
      cursor: pointer;
    }

    .btn:before {
      content: '\2715';
      top: 0;
      left: 0.3rem;
      font-size: 1rem;
      color: $color-text;
      opacity: 0.7;
    }

    .btn:hover {
      opacity: 1;
      color: $color-hover-text;
      border: 1px solid $color-hover-text;
    }

    .btn:hover:before {
      color: $color-hover-text;
      opacity: 1;
    }
  }

  .listEmpty {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 30rem;
    min-height: 3.1rem;
    margin: 0 auto 0.5rem auto;
    text-align: center;
    font-family: $ff-task;
    color: $color-text;
    background: #FFDFBE;

    & h2 {
      margin: 0 0 0 1rem;
    }
  }

  @media (max-width: 930px) {
    .listItem, .listEmpty{
      min-width: 25rem;
      min-height: 2.5rem;
    }
  }

  @media (max-width: 820px) {
    .listItem, .listEmpty{
      min-width: 20rem;
    }
  }

  @media (max-width: 660px) {

    .listItem{
      & .btn {
        width: 1.3rem;
        height: 1.3rem;
      }

      & .btn:before {
        font-size: 0.8rem;
      }
    }

  }

  @media (max-width: 500px) {
    .listItem, .listEmpty{
      min-width: 18rem;
    }
  }

</style>
