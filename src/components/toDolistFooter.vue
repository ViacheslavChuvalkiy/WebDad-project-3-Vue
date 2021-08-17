<template>
  <div :class="$style.footer">
    <div :class="$style.info">
      <p>{{tasks.active}}/{{tasks.count}} left</p>
    </div>
    <ToDoFilter @selectOption="onSelectFilter"/>
  </div>
</template>

<script>
  import ToDoFilter from "./toDoFilter";

  export default {
    name: "ToDolistFooter",
    components: {
      ToDoFilter
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
    width: 35rem;
    min-height: 3.1rem;
    font-size: 1.2rem;
    background: $color_bg_brown;
    color: $color-text;

    .info {
      display: flex;
      align-self: center;
      padding: 0.1rem 1rem;

      & p {
        padding: 0;
        margin: 0;
        opacity: 0.42;
      }
    }
  }

</style>