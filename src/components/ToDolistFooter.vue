<template>
  <div :class="$style.footer">
    <div :class="$style.info">
      <p>{{countActiveTask}}/{{countTask}} left</p>
    </div>
    <ToDoFilterBlock @selectOption="onSelectFilter"/>
  </div>
</template>

<script>

  import ToDoFilterBlock from "./ToDoFilterBlock";
  import {mapGetters} from 'vuex';

  export default {
    components: {
      ToDoFilterBlock
    },
    computed: {
      ...mapGetters("tasks", ["countTask", "countActiveTask"]),
    },
    methods: {
      onSelectFilter(status) {
        this.$emit("selectOption", status);
      }
    }
  }

</script>

<style lang="scss" module>
  @import 'src/assets/styles/vars.scss';

  .footer {
    display: flex;
    justify-content: space-between;
    min-height: 3.1rem;
    padding: 0 2rem;
    font-size: 1.2rem;
    background: $color_bg_brown;
    color: $color-text;

    .info {
      display: flex;
      align-self: center;

      & p {
        padding: 0;
        margin: 0;
        opacity: 0.42;
      }
    }
  }

  @media (max-width: 450px) {
    .footer {
        padding: 0 0.5rem;
    }
  }

</style>