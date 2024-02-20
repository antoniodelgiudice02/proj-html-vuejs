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
  <div>
    <span></span>
    <span></span>
    <p></p>
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
}
</style>