<template>
  <div :class="$style.container">
    <img src="@/assets/img/bg-note.png">
    <div :class="$style.title">
      <h2> to do list</h2>
    </div>
    <div :class="$style.block">
      <ToDolistItem/>
      <ToDolistNewTask/>
    </div>
    <ToDolistFooter :selectOption="onSelectOption"/>
  </div>
</template>

<script>
  import ToDolistItem from "./ToDolistItem";
  import ToDolistNewTask from "./ToDolistNewTask";
  import ToDolistFooter from "./ToDolistFooter";

  export default {
    components: {
      ToDolistItem,
      ToDolistNewTask,
      ToDolistFooter,
    },
    methods: {
      onSelectOption() {
      }
    }
  }
</script>

<style lang="scss" module>
  @import 'src/assets/style.scss';
  .container {
    min-width: 30rem;
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
      top: 1rem;
      left: 50%;
      opacity: 0.8;
      z-index: -1;
    }
    .title {
      text-align: center;
      background: $color_bg_brown;
      h2 {
        color: $color-text;
        font-size: 1.2rem;
        font-weight: 600;
        margin: 0;
        padding: 1rem 0;
      }
    }
    .block {
      padding: 2rem 0;
      background: $color_white;
      & div :last-child {
        margin-bottom: 0;
      }
    }
  }
  @media (max-width: 1010px) {
    .container {
      & img {
        width: 25rem;
        height: 35rem;
      }
    }
  }
  @media (max-width: 820px) {
    .container {
      & img {
        width: 20rem;
        height: 33rem;
      }
    }
  }
  @media (max-width: 660px) {
    .container {
      max-width: 25rem;
      margin: 0 auto;
      padding: 4rem 0.5rem;
      & img {
        left: 43%;
      }
    }
  }
  @media (max-width: 600px) {
    .container {
      margin: 0 2rem 0 4rem;
      & img {
        left: 40%;
      }
    }
  }
  @media (max-width: 580px) {
    .container {
      margin: 0 auto;
      & img {
        display: none;
      }
    }
  }
  @media (max-width: 500px) {
    .container {
      max-width: 20rem;
      .title {
        padding: 0;
      }
    }
  }
</style>
