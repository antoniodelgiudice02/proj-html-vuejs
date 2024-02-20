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
    text: String
  }

}
</script>

<template>

    <div class="card">
        <h1>{{ title }}</h1>
        <p>{{ text }}</p>
    </div>




</template>

<style lang="scss" scoped>

.card {
    height: 200px;
    margin: 15px 0;
    padding: 20px;
}


</style>