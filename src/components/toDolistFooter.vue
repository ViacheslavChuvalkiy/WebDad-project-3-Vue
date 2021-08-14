<template>
  <div class="toDo-list__footer">
    <div class="toDoList__info">
      <p>1/3 left</p>
    </div>
    <div class="toDoList__filter">

      <label for="filterChoice1" class="toDoList-filter__option">
        <input type="radio" id="filterChoice1"
               name="filter" value="all" checked>
        <span>All</span>
      </label>

      <label for="filterChoice2" class="toDoList-filter__option">
        <input type="radio" id="filterChoice2"
               name="filter" value="active">
        <span>Active</span>
      </label>

      <label for="filterChoice3" class="toDoList-filter__option">
        <input type="radio" id="filterChoice3"
               name="filter" value="completed">
        <span>Completed</span>
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    name: "toDolistFooter"
  }
</script>

<style lang="scss" scoped>

  @import 'src/assets/styles/vars.scss';

  .toDo-list__footer{
    display: flex;
    justify-content: space-between;
    width: 35rem;
    height: 3.1rem;
    font-size: 1.2rem;
    background: $color_bg_brown;
    color: $color-text;

    .toDoList__info{
      display: flex;
      align-self: center;
      padding: 0.1rem 1rem;

      & p{
        padding: 0;
        margin: 0;
        opacity: 0.42;
      }
    }

    .toDoList__filter {
      display: flex;
      align-self: center;

      & span{
        padding: 0.1rem 0.3rem;
        opacity: 0.42;
      }

      & input {
        display: none;
      }

      & label input:checked + span{
        border-radius: 3px;
        border: 2px solid #C9955D;
      }

      .toDoList-filter__option {
        padding: 0.1rem 0.5rem;
        margin: 0 0 0.2rem 0;
      }
    }
  }

</style>