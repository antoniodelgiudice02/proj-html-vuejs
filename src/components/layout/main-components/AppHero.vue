<script>
import { store } from '../../../store'

export default {
  data() {
    return {
      store,
    }
  }

}
</script>

<template>
  <div id="jumbotron">
    <div class="container debug">

      <span>hero</span>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.debug {
  border: 1px solid red;
}
</style>