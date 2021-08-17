<template>
  <div id="app">
    <ToDolist/>
  </div>
</template>


<script>

  import ToDolist from "./components/toDoList.vue";

  export default {
    components: {
      ToDolist,
    },

  }
</script>


<style lang="scss">

  @import url('https://fonts.googleapis.com/css2?family=Inter&family=Open+Sans:wght@600&display=swap');
  @import 'src/assets/styles/vars.scss';

  body {
    margin: 0;
    padding: 0;
    user-select: none;
  }

  #app {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to right, #FF7E5F, #FEB567);
  }


</style>
