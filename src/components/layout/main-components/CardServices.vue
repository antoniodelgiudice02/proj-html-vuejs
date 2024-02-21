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
      <div class="d-flex justify-content-between">
        <div class="image">
          <img :src="getImage()" alt="">
        </div>
        <div class="arrow">
          <span><a href="">Go</a></span>
        </div>

      </div>
        <h1>{{ title }}</h1>
        <p>{{ text }}</p>
    </div>




</template>

<style lang="scss" scoped>
@use '../../../assets/style/partials/variables';
.card {
    margin: 15px 0;
    padding: 20px;

    .image{
      width: 13%;
      margin-bottom: 10px;

      img{
        width: 100%;
      }
    }

    .arrow{
      width: 30px;
      height: 30px;
      line-height: 30px;
      vertical-align: middle;
      text-align: center;
      a{
        text-decoration: none;
        color: rgb(5, 130, 131);
      }

      
      &:hover{
        background-color:rgb(5, 130, 131, 0.2);
        border-radius: 50%;
      }
    }

  h1{
    font-size: 1.3rem;
  }
}


</style>