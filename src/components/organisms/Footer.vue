<template>
  <div :class="$style.footer">
    <div :class="$style.info">
      <p>{{countActiveTask}}/{{countTask}} left</p>
    </div>
    <Filters @selectOption="onSelectFilter"/>
  </div>
</template>

<script>
  import Filters from "@/components/organisms/Filters";
  import {mapGetters} from 'vuex';

  export default {
    components: {
      Filters
    },
    computed: {
      ...mapGetters(["countTask", "countActiveTask"]),
    },
    methods: {
      onSelectFilter(status) {
        this.$emit("selectOption", status);
      }
    }
  }
</script>

<style lang="scss" module>
  @import '@/assets/style.scss';
  .footer {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    background: $color_bg_brown;
    color: $color-text;
    .info {
      display: flex;
      align-self: center;
      & p {
        padding: 0;
        margin: 0;
        opacity: 0.42;
      }
    }
  }
  @media (max-width: 500px) {
    .footer {
      padding: 1rem 1rem;
      font-size: 1rem;
    }
  }

</style>