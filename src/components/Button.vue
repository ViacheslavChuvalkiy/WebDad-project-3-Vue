<template>
  <button :class="$style.btn" @click="deleteItem(TaskId)"></button>
</template>

<script>
  import {mapMutations} from "vuex";

  export default {
    props: {
      TaskId: String
    },
    methods: {
      ...mapMutations(['deleteTask']),
      deleteItem(id) {
        this.deleteTask(id);
      },
    }
  }
</script>

<style lang="scss" module>
  @import 'src/assets/style.scss';
  .btn {
    position: relative;
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 1rem;
    background: transparent;
    color: $color-text;
    border: 1px solid $color_bg_brown;
    opacity: 0.8;
    cursor: pointer;
  }
  .btn:before {
    content: '\2715';
    top: 0;
    left: 0.3rem;
    font-size: 1rem;
    color: $color-text;
    opacity: 0.7;
  }
  .btn:hover {
    opacity: 1;
    color: $color-hover-text;
    border: 1px solid $color-hover-text;
  }
  .btn:hover:before {
    color: $color-hover-text;
    opacity: 1;
  }
  @media (max-width: 660px) {
    .btn {
      width: 1.3rem;
      height: 1.3rem;
    }
    .btn:before {
      font-size: 0.8rem;
      margin: 0 0 0 -0.1rem;
    }
  }

</style>