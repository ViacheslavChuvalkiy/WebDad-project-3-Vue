<template>
  <div :class="$style.newTask">
    <input
            type="text"
            placeholder="Add a new task"
            v-model="task_value.value"
            @keypress.enter="addNewTask"
    >
  </div>
</template>

<script>
  export default {
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
    margin: 2rem 2rem 0 2rem;
    text-align: center;
    background: $color_bg_light_brown;
    border-radius: 10px;
    border: 2px dashed $color_bg_brown;

    & input {
      width: 99%;
      min-height: 3.1rem;
      margin: 0;
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

  @media (max-width: 930px) {
    .newTask{
      max-width: 25rem;
      min-height: 2.5rem;
      margin: 2rem 1rem 0 2rem;

      & input{
        max-width: 25rem;
        min-height: 2.5rem;
      }

    }
  }

  @media (max-width: 820px) {
    .newTask{
      max-width: 20rem;

    }

  }

  @media (max-width: 500px) {
    .newTask {
      max-width: 18rem;
    }
  }

</style>