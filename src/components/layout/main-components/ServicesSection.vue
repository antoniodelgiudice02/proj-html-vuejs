<script>
import { store } from '../../../store'

export default {
  data() {
    return {
      store,
    }
  },

  props: {
  },

  methods: {
    getImage() {
      return new URL('../../../images/' + this.image, import.meta.url).href
    }
  }

}
</script>

<template>

</template>

<style lang="scss" scoped>

</style>