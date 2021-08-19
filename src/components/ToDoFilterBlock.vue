<template>
  <div :class="$style.filter">
    <div v-for="filter in filterList" :key="filter.id">
      <ToDoFilter :filter="filter"/>
    </div>
  </div>
</template>

<script>
  import ToDoFilter from  './ToDoFilter';
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters("filter", ["filterList"]),
    },
    components: {
      ToDoFilter,
    },


  }
</script>

<style lang="scss" module>

  .filter {
    display: flex;
    align-self: center;
  }
</style>