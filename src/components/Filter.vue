<template>
  <label :class="$style.filterOption">
    <input
       type="radio"
       name="filter"
       :value="filterValue"
       :checked="filterChecked"
       @change="changeFilter(filterId)"
    >
    <span>{{filterText}}</span>
  </label>
</template>

<script>
  import {mapMutations} from "vuex";

  export default {
    props: {
      filterValue: String,
      filterText: String,
      filterChecked: Boolean,
      filterId: String,
    },
    methods: {
      ...mapMutations(['changeFilterStatus', 'changeActiveFilter']),
      changeFilter(id) {
        this.changeActiveFilter(id);
      }
    }
  }
</script>

<style lang="scss" module>
  .filterOption {
    padding: 0.1rem 0 0.1rem 0.5rem;
    margin: 0 0 0.2rem 0;
    & span {
      padding: 0.1rem 0.3rem;
      opacity: 0.42;
    }
    & input {
      display: none;
    }
    & input:checked + span {
      border-radius: 3px;
      border: 2px solid #C9955D;
    }
  }
  @media (max-width: 500px) {
    .filterOption {
      padding: 0;
    }
  }
</style>