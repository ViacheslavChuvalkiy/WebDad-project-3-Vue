<template>
  <label :class="$style.task">
    <input
       type="checkbox"
       :checked="TaskChecked"
       @change="changeStatus(TaskId)"
    >
    <span :class="$style.itemStatus"></span>
    <TaskInfo :Context="TaskText"/>
    <Btn :TaskId="TaskId"/>
  </label>

</template>

<script>
  import TaskInfo from './TaskInfo';
  import Btn from './Button';
  import {mapMutations} from 'vuex';

  export default {
    props: {
      TaskText: String,
      TaskChecked: Boolean,
      TaskId: String,
    },
    methods: {
      ...mapMutations(['changeStatusTask']),
      changeStatus(id) {
        this.changeStatusTask(id);
      },
    },
    components: {
      TaskInfo,
      Btn
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