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
    text: String,
    icon: String
  }

}
</script>

<template>
  <div class="card">

    <h1><font-awesome-icon :icon="['fas', icon]" class="icon" />{{ title }}</h1>
    <p>{{ text }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../assets/style/partials/variables';

.card {
  padding: 20px 0;
  background-color: rgba(255, 255, 255, 0);
  border: none;

  h1 {
    font-size: 1.3rem;

    .icon {
      color: $secondary-color;
      margin-right: 10px;
    }
  }

  p{
    color: $text-secondary-color;
  }


}
</style>