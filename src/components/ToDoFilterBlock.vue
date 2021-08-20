<template>
  <div :class="$style.filter">
    <ToDoFilter
       v-for="filter in filterList"
       :key="filter.id"
       :filterValue="filter.value"
       :filterText="filter.text"
       :filterId="filter.id"
       :filterChecked="filter.isChecked"
    />
  </div>
</template>

<script>
  import ToDoFilter from './ToDoFilter';
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