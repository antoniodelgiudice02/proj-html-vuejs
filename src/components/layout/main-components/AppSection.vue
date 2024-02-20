<script>
import { store } from '../../../store'
import AppCard from '../items/AppCard.vue'

export default {
  data() {
    return {
      store,
    }
  },

  props: {
    name: String,
    title: String,
    paragraph: String,
    cards: Array

  },

  components: { AppCard }

}
</script>

<template>
  <section>


    <div class="text">

      <span> {{ name }}</span>
      <h1>{{ title }}</h1>
      <p>{{ paragraph }}</p>



    </div>

    <div class="card-container">

      <app-card v-for="card in cards" :class="(cards.length > 4) ? 'my-card-30' : 'my-card-50'" ></app-card>

    </div>





  </section>
</template>

<style lang="scss" scoped>
.card-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  .my-card-30{
    border: 0.5px solid gray;
    width: 30%;
    height: 200px;
    margin: 10px 0;
  }
  .my-card-50{
    border: 0.5px solid gray;
    width: 45%;
    height: 200px;
    margin: 10px 0;
  }
}

.debug {
  border: 1px solid red;

}
</style>