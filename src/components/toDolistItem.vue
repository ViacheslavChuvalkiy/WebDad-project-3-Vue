<template>
  <div class="toDo-List__items">
    <div class="toDo-list__item" v-for="(task,prop) in toDoList" :key="prop">
      <label :for= task.id >
        <input type="checkbox" :id= task.id checked v-if="task.status === 'done'">
        <input type="checkbox" :id= task.id v-else >
        <span class="toDo-item__status"></span>
      </label>
      <p>{{task.text}}</p>
      <button class="toDo-item__btn"><span>X</span></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "toDolistItem",
    props: {
      toDoList : {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>

<style lang="scss" scoped>

  @import 'src/assets/styles/vars.scss';

  .toDo-list__item{

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 30rem;
    height: 3.1rem;
    margin: 0 auto 0.5rem auto;
    text-align: center;
    font-family: $ff-task;
    background: #FFDFBE;

    & input{
      display: none;
    }

    .toDo-item__status{
      display: block;
      margin-left: 0.5rem;
      width: 1.5rem;
      height: 1.5rem;
      background: transparent;
      border: 1px solid $color_bg_brown;
      cursor: pointer;
    }

    & label input:checked + span{
      background: #FEB567;
      position: relative;

      &:before{
        content: '\2713';
        display: block;
        position: absolute;
        font-size: 1.15rem;
        top: -5%;
        left: 26%;
        color: $color_white;
      }
    }

    & p{
      text-align: left;
      flex: auto;
      margin-left: 1rem;
      font-weight: 400;
      font-size: 1.2rem;
      color: $color-text;
    }

    .toDo-item__btn{
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
      background: transparent;
      color: $color-text;
      border: 1px solid $color_bg_brown;
      opacity: 0.8;
      cursor: pointer;
      & span{
        opacity: 0.3;
        font-weight: 600;
      }
    }

    .toDo-item__btn:hover{
      opacity: 1;
      color: #FC8F1A;
      border: 1px solid #FC8F1A;
      & span{
        opacity: 1;
      }
    }
  }

</style>
