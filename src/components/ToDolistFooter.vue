<template>
  <div :class="$style.footer">
    <div :class="$style.info">
      <p>{{tasks.active}}/{{tasks.count}} left</p>
    </div>
    <ToDoFilterBlock @selectOption="onSelectFilter"/>
  </div>
</template>

<script>
  import ToDoFilterBlock from "./ToDoFilterBlock";

  export default {
    components: {
      ToDoFilterBlock
    },
    props: {
      tasks: {
        type: Object,
        default: () => ({})
      },
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
    max-width: 35rem;
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
        max-width: 25rem;
        padding: 0 0.5rem;
    }
  }

</style>