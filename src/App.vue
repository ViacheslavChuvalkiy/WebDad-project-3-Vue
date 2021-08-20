<template>
  <div id="app">
    <Content />
  </div>
</template>

<script>
  import Content from "./components/Content.vue";

  export default {
    components: {
      Content
    },
  }
</script>

<style lang="scss">
  @import 'src/assets/style.scss';
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
