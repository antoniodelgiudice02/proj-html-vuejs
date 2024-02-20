<script>
import { store } from '../../../store'

export default {
  data() {
    return {
      store,
    }
  },

  props:{
    image: String
  }

}
</script>

<template>

    <div class="card">
        <img src="" alt="">
    </div>




</template>

<style lang="scss" scoped>

.card {
    height: 200px;
    margin: 15px 0;
    padding: 20px;
}


</style>