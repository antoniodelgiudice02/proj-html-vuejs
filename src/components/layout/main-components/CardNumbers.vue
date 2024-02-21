<script>
import { store } from '../../../store'

export default {
  data() {
    return {
      store,
    }
  },

  props: {
    title: String,
    text: String
  }

}
</script>

<template>
  <div class="card">
    <span class="number">{{ title }}</span>
    <span class="text">{{ text }}</span>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../assets/style/partials/variables';

.card {
  height: 200px;
  background-color: rgba(240, 248, 255, 0);
  margin: 15px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .number {
    color: $secondary-color;

    font-size: 2rem;
  }

  .text {
    color: white;
    font-size: 1.5rem;
  }
}
</style>