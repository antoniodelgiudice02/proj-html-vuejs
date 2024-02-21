<script>
import { store } from '../../store'

export default {
  data() {
    return {
      store,
    }
  }

}
</script>

<template>
  <header>

    <div>
    </div>

  </header>
</template>

<style lang="scss" scoped>
@import '../../assets/style/partials/variables';

header {
  height: 45px;
  background-color: #21333e;
  position: sticky;
  top: 0;
  z-index: 1;
  color: $text-primary-color;
}
</style>