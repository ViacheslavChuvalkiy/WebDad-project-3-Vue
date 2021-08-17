<template>
  <div>
    <template v-if="!isEmpty">
      <div :class="$style.listItem" v-for="(task) in toDoList" :key="task.id">
        <label >
          <input type="checkbox" checked v-if="task.status === 'done'" @change="changeStatus(task.id)">
          <input type="checkbox" v-else @change="changeStatus(task.id)">
          <span :class="$style.itemStatus"></span>
        </label>
        <p>{{task.text}}</p>
        <button :class="$style.btn" @click="deleteItem(task.id)"></button>
      </div>
    </template>
    <div v-else :class="$style.listEmpty">
      <h2>добавьте задачи к выполнению!!!</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ToDolistItem",
    props: {
      toDoList: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      isEmpty() {
        return !Object.keys(this.toDoList).length;
      }
    },
    methods: {
      deleteItem(id) {
        this.$emit("deleteItem", id);
      },
      changeStatus(id) {
        this.$emit("changeStatus", id);
      }
    }
  }
</script>

<style lang="scss" module>
  @import 'src/assets/styles/vars.scss';

  .listItem {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 30rem;
    min-height: 3.1rem;
    margin: 0 auto 0.5rem auto;
    text-align: center;
    font-family: $ff-task;
    background: #FFDFBE;

    & input {
      display: none;
    }

    .itemStatus {
      display: block;
      margin-left: 0.5rem;
      width: 1.5rem;
      height: 1.5rem;
      background: transparent;
      border: 1px solid $color_bg_brown;
      cursor: pointer;
    }

    & label input:checked + span {
      background: #FEB567;
      position: relative;

      &:before {
        content: '\2713';
        display: block;
        position: absolute;
        font-size: 1.15rem;
        top: -5%;
        left: 26%;
        color: $color_white;
      }
    }

    & p {
      text-align: left;
      flex: auto;
      margin-left: 1rem;
      font-weight: 400;
      font-size: 1.2rem;
      color: $color-text;
    }

    .btn {
      position: relative;
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
      background: transparent;
      color: $color-text;
      border: 1px solid $color_bg_brown;
      opacity: 0.8;
      cursor: pointer;
    }

    .btn:before {
      content: '\2715';
      position: absolute;
      top: 0;
      left: 5px;
      font-size: 16px;
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
  }

  .listEmpty {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 30rem;
    height: 3.1rem;
    margin: 0 auto 0.5rem auto;
    text-align: center;
    font-family: $ff-task;
    color: $color-text;
    background: #FFDFBE;

    & h2 {
      margin: 0 0 0 1rem;
    }
  }

</style>
