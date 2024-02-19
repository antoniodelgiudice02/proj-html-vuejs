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
    <app-hero />

    <div class="container debug" v-for="(section, index) in store.sections">

        <div class="section-container debug">

            <app-section :class="'section' + index.toString()" class="debug" :title="section.title" :name="section.name"
                :paragraph="section.paragraph">
            </app-section>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.container {
    flex-direction: column;

    .section-container {
        width: 70%;
        height: 100%;
        margin: 50px;

        .section0{
            width: 70%;
        }
        .section1 {
            width: 50%;

        }

        .section2,.section3{
            text-align: center;
        }

        .section4{
            width: 60%;
        }
    }
}


.debug{
    
    border: 1px solid red;
}
</style>