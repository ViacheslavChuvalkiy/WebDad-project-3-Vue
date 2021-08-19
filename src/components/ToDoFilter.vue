<template>
  <label :class="$style.filterOption">
    <input
            type="radio"
            name="filter"
            :value="filter.value"
            :checked="filter.isChecked"
            @change="changeFilter(filter.id)"
    >
    <span>{{filter.text}}</span>
  </label>
</template>

<script>

  import {mapActions} from "vuex";

  export default {
    props: {
      filter: {
        type: Object,
        default: () => ({})
      },
    },
    methods: {
      ...mapActions('filter', ['changeFilter', 'changeActiveFilter']),
      changeFilter(id) {
        this.changeFilter(id);
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