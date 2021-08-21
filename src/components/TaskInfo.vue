<template>
  <p>{{Context}}</p>
</template>

<script>
  export default {
    props: {
      Context: String,
    }
  }
</script>

<style lang="scss" module>
  @import 'src/assets/style.scss';
  p {
    text-align: left;
    flex: auto;
    word-break: break-all;
    margin: 0.3rem 1rem;
    font-weight: 400;
    font-size: 1.2rem;
    color: $color-text;
  }
</style>