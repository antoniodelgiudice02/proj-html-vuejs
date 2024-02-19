<script>
import { store } from './store';
import AppHeader from './components/layout/AppHeader.vue';
import AppMain from './components/layout/AppMain.vue';
import AppFooter from './components/layout/AppFooter.vue';

export default {
  data() {
    return {
      store,
    }
  },

  components: { AppHeader, AppMain, AppFooter, }

}
</script>

<template>
  <body class="d-flex flex-column">

    <app-header class="debug"></app-header>

    <app-main>


    </app-main>

    <app-footer>
      
    </app-footer>

  </body>
</template>

<style lang="scss">
@use './assets/style/general.scss'
</style>
