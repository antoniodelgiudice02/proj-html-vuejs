<script>
import { store } from '../../../store'

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

  }

}
</script>

<template>
  <section>


    <div class="text">

      <span> {{ name }}</span>
      <h1>{{ title }}</h1>
      <p>{{ paragraph }}</p>

    </div>




  </section>
</template>

<style lang="scss" scoped>
.debug {
  border: 1px solid red;
  height: 500px;
}
</style>