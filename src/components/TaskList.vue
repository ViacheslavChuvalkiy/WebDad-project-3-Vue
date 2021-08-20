<template>
  <div :class="$style.wrapper">
    <template v-if="!isEmpty">
      <Task
         v-for="task in listTasks"
         :key="task.id"
         :TaskChecked="task.isChecked"
         :TaskId="task.id"
         :TaskText="task.text"
      />
    </template>
    <template v-else>
      <h2>добавьте задачи к выполнению!!!</h2>
    </template>
  </div>
</template>

<script>
  import Task from "./Task";
  import {mapGetters} from 'vuex';

  export default {
    components: {
      Task,
    },
    computed: {
      ...mapGetters("tasks", ["listTasks"]),
      ...mapGetters("filter", ["getActiveFilter"]),
      isEmpty() {
        return !Object.values(this.listTasks).length;
      }
    }
  }
</script>

<style lang="scss" module>
  @import 'src/assets/style.scss';
  .wrapper {
    margin: 0 0 2rem 0;
    & h2 {
      text-align: center;
      color: $color-text;
      font-size: 1.2rem;
      font-weight: 600;
      margin: 0;
      padding: 1rem 0;
    }
  }

</style>
