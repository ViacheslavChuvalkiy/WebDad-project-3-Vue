<template>
  <div class="toDoList__newTask">
      <input type="text" placeholder="Add a new task" v-model = "task_value.value" @keypress.enter="addNewTask" required>
  </div>
</template>

<script>
  export default {
    name: "toDolistNewTask",
    data: () => ({
     task_value: {
       value : ''
     },
    }),
    methods: {
      addNewTask(){
        this.$emit("addNewTask", this.task_value.value);
        this.task_value.value = '';
      }
    }
  }
</script>

<style lang="scss" scoped>

  @import 'src/assets/styles/vars.scss';

  .toDoList__newTask {
    max-width: 30rem;
    height: 3.1rem;
    margin: 1.5rem auto 0 auto;
    text-align: center;
    background: $color_bg_light_brown;
    border-radius: 3px;
    border: 2px dashed $color_bg_brown;

    & input {
      width: 99%;
      height: 3.1rem;
      font-size: 1.5rem;
      color: $color_text;
      border: none;
      background: transparent;
    }

    & input::placeholder {
      color: $color_bg_brown;
      font-size: 1.3rem;
      text-align: center;
    }

    & input:focus {
      outline: none;
    }
  }

</style>