<template>
  <label :class="$style.task">
    <input
       type="checkbox"
       :checked="TaskChecked"
       @change="changeStatus(TaskId)"
    >
    <span :class="$style.itemStatus"></span>
    <p>{{TaskText}}</p>
    <button :class="$style.btn" @click="deleteItem(TaskId)"></button>
  </label>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    props: {
      TaskText: String,
      TaskChecked: Boolean,
      TaskId: String,
    },
    methods: {
      ...mapActions('tasks', ['changeStatusTask', 'delTask']),
      changeStatus(id) {
        this.changeStatusTask(id);
      },
      deleteItem(id){
        this.delTask(id);
      },
    }
  }
</script>

<style lang="scss" module>
  @import 'src/assets/style.scss';
  .task {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    margin: 0 2rem 2rem 2rem;
    text-align: center;
    border-radius: 10px;
    font-family: $ff-task;
    background: #FFDFBE;
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
    & p {
      text-align: left;
      flex: auto;
      word-break: break-all;
      margin: 0.3rem 1rem;
      font-weight: 400;
      font-size: 1.2rem;
      color: $color-text;
    }
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
  }
  @media (max-width: 660px) {
    .task {
      & .btn {
        width: 1.3rem;
        height: 1.3rem;
      }
      & .btn:before {
        font-size: 0.8rem;
        margin: 0 0 0 -0.1rem;
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