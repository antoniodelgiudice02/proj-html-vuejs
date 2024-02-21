<script>
import { store } from '../../../store'

export default {
  data() {
    return {
      store,
    }
  },

  props: {
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
  </div>
</template>

<style lang="scss" scoped>
.card {
  height: 200px;
  margin: 15px 0;
  padding: 20px;
  background-color: rgba(240, 255, 255, 0);
  border: none;

  display: flex;
  justify-content: center;

  filter: brightness(3);


  img {
    width: 70%;
  }


}
</style>