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
    image: String
  },

  methods: {
    getImage() {
      return new URL('../../../images/' + this.image, import.meta.url).href
    }
  }

}
</script>

<template>
  <div class="card">

    <img :src="getImage()" alt="">

    <div class="text">
      <span class="title">{{ title }}</span>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.card {
  margin: 15px 0;
  position: relative;

  .text {
    position: absolute;
    bottom: 0;
    font-size: 1.2rem;
    text-align: center;
    color: white;
    margin: 15px;
  }
}
</style>