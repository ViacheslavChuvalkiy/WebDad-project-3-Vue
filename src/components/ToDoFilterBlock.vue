<template>
  <div :class="$style.filter">
    <div v-for="filter in filterItems" :key="filter.id">
      <ToDoFilter :filter="filter"/>
    </div>
  </div>
</template>

<script>
  import ToDoFilter from  './ToDoFilter';
  export default {
    data: () => ({
      filterItems: {
          1: {
            value: 'all',
            isChecked: 'true',
            text: 'All',
            id: '1'
          },
        2: {
          value: 'active',
          isChecked: 'false',
          text: 'Active',
          id: '2'
        },
        3: {
          value: 'completed',
          isChecked: 'false',
          text: 'Completed',
          id: '3'
        }
        }
    }),
    components: {
      ToDoFilter,
    }

  }
</script>

<style lang="scss" module>

  .filter {
    display: flex;
    align-self: center;
  }
</style>