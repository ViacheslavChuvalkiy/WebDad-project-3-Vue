<template>
  <label :class="$style.task">
    <input
            type="checkbox"
            :checked="ToDoTask.status === 'completed'"
            @change="changeStatus(ToDoTask.id)"
    >
    <span :class="$style.itemStatus"></span>
  </label>
</template>

<script>

  import {mapActions} from 'vuex';

  export default {
    props: {
      ToDoTask: {
        type: Object,
        default: () => ({})
      }
    },
    methods: {
      ...mapActions('tasks', ['changeStatusTask']),
      changeStatus(id) {
        this.changeStatusTask(id);
      }
    }
  }
</script>

<style lang="scss" module>

  @import 'src/assets/styles/vars.scss';

  .task {
    input {
      display: none;
    }

    .itemStatus {
      display: block;
      margin-left: 1rem;
      width: 1.4rem;
      height: 1.4rem;
      background: transparent;
      border: 1px solid $color_bg_brown;
      cursor: pointer;
    }

    & input:checked + span {
      background: #FEB567;
      position: relative;

      &:before {
        content: '\2713';
        display: block;
        position: absolute;
        font-size: 1.15rem;
        top: -10%;
        left: 26%;
        color: $color_white;
      }
    }
  }

  @media (max-width: 550px) {

    .task {
      .itemStatus {
        width: 1.2rem;
        height: 1.2rem;
      }

      & input:checked + span {

        &:before {
          font-size: 1rem;
          top: -15%;
        }
      }
    }
  }


</style>