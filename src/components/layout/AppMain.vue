<script>
import { store } from '../../store'

import AppSection from './main-components/AppSection.vue';
import AppHero from './main-components/AppHero.vue';

export default {
  data() {
    return {
      store,
    }
  },

  components: { AppSection, AppHero }

}
</script>

<template>

    <app-hero/>

    <app-section v-for="section in store.sections"></app-section>

</template>

<style lang="scss" scoped>


</style>