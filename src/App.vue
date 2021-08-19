<template>
  <div id="app">
    <ToDolist/>
  </div>
</template>

<script>
  import ToDolist from "./components/ToDoList.vue";
  export default {
    components: {
      ToDolist,
    },
  }
</script>

<style lang="scss">
  @import "assets/styles/fonts";
  @import 'src/assets/styles/vars.scss';

  body {
    margin: 0;
    padding: 0;
    user-select: none;
    height: 100vh;
    background: linear-gradient(to right, #FF7E5F, #FEB567);
  }

  #app {
    display: flex;
    flex-direction: column;
    width: auto;
  }
</style>
