<script>
import { store } from '../../../store'

export default {
  data() {
    return {
      store,
    }
  },

  props:{
    title: String,
    text: String,
    icon: String
  },

  methods:{
    getImage(){
      return new URL('../../../svgs/' + this.icon, import.meta.url).href
    }
  }

}
</script>

<template>

    <div class="card">
        <div><img :src="getImage()" alt=""></div>
        <h1>{{ title }}</h1>
        <p>{{ text }}</p>
    </div>




</template>

<style lang="scss" scoped>

.card {
    margin: 15px 0;
    padding: 20px;

    div{
      width: 13%;
      margin-bottom: 10px;

      img{
        width: 100%;
      }
    }

  h1{
    font-size: 1.3rem;
  }
}


</style>