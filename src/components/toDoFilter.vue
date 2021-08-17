<template>
  <div :class="$style.filter">
    <label :class="$style.filterOption">
      <input type="radio"
             name="filter" value="all" @change="selectOption" v-model='status' checked>
      <span>All</span>
    </label>
    <label :class="$style.filterOption">
      <input type="radio"
             name="filter" value="active" @change="selectOption" v-model='status'>
      <span>Active</span>
    </label>
    <label :class="$style.filterOption">
      <input type="radio"
             name="filter" value="completed" @change="selectOption" v-model='status'>
      <span>Completed</span>
    </label>
  </div>
</template>

<script>

  export default {
    data: () => ({
      status: 'all'
    }),
    methods: {
      selectOption() {
        this.$emit("selectOption", this.status);
      }
    }
  }
</script>

<style lang="scss" module>

  .filter {
    display: flex;
    align-self: center;
    padding: 0 0.5rem;

    & span {
      padding: 0.1rem 0.3rem;
      opacity: 0.42;
    }

    & input {
      display: none;
    }

    & label input:checked + span {
      border-radius: 3px;
      border: 2px solid #C9955D;
    }
  }

  .filterOption {
    padding: 0.1rem 0.5rem;
    margin: 0 0 0.2rem 0;
  }

</style>