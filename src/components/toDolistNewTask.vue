<template>
  <div :class="$style.newTask">
    <input type="text" placeholder="Add a new task" v-model="task_value.value" @keypress.enter="addNewTask" required>
  </div>
</template>

<script>
  export default {
    name: "ToDolistNewTask",
    data: () => ({
      task_value: {
        value: ''
      },
    }),
    methods: {
      addNewTask() {
        this.$emit("addNewTask", this.task_value.value);
        this.task_value.value = '';
      }
    }
  }
</script>

<style lang="scss" module>
  @import 'src/assets/styles/vars.scss';

  .newTask {
    max-width: 30rem;
    min-height: 3.1rem;
    margin: 0 auto 0;
    text-align: center;
    background: $color_bg_light_brown;
    border-radius: 3px;
    border: 2px dashed $color_bg_brown;

    & input {
      width: 99%;
      min-height: 3.1rem;
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