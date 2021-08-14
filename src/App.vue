<template>
  <div id="app">
    <toDolist />
  </div>
</template>


<script>

  import toDolist from "./components/toDoList.vue";

  export default {
    name: 'main',
    components: {
      toDolist,
    },

    data: () => {
    }

  }
</script>


<style lang="scss">

  @import url('https://fonts.googleapis.com/css2?family=Inter&family=Open+Sans:wght@600&display=swap');
  @import 'src/assets/styles/vars.scss';

  body{
    margin: 0;
    padding: 0;
    user-select: none;
  }

  #app{
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to right, #FF7E5F, #FEB567);
  }


</style>
