<script>
import { store } from '../../store'

import AppSection from './main-components/AppSection.vue';
import AppHero from './main-components/AppHero.vue';
import SectionHeader from './items/SectionHeader.vue'
import NavBar from './items/NavBar.vue'

export default {
    data() {
        return {
            store,
            colClass: 
        }
    },

    components: { AppSection, AppHero, SectionHeader, NavBar },

    methods:{
        assignColClass(index){
            if (index == 0 || 2){
                this.colClass = 'col-4'
            }
            if (index == 1){
                this.colClass = 'col-6'
            }
            if (index == 3){
                this.colClass = 'col-3'
            }
        }
    }

}
</script>

<template>
    <app-hero />

    <!-- <div class="section debug" v-for="(section, index) in store.sections">

        <div class="container debug">

            <app-section :class="'section' + index.toString()" class="default debug" :title="section.title"
                :name="section.name" :paragraph="section.paragraph" :cards="section.cards">
            </app-section>

        </div>

    </div> -->

    <!-- <section id="business" class="debug">

        <div class="container debug">

            <section-header></section-header>

            <div class="row">
                <div class="col-4"></div>
            </div>

        </div>

    </section>

    <section id="network" class="debug">

        <div class="container debug">

            <section-header></section-header>

            <div class="row">
                <div class="col-6"></div>
            </div>

        </div>

    </section> -->



    <!-- <section id="numbers" class="debug">

        <div class="container debug">

            <section-header></section-header>

            <div class="row">
                <div class="col-3"></div>
            </div>

        </div>

    </section>

    <section id="contacts" class="debug">

        <div class="container debug">

            <section-header></section-header>

        </div>

    </section> -->

    <section id="projects" class="debug" v-for="(section, index) in store.sections">

        <div class="container debug">

            <section-header></section-header>
            <nav-bar></nav-bar>

            <div class="row">
                <div :class="colClass.assignColClass(index)"></div>
            </div>

        </div>

    </section>
</template>

<style lang="scss" scoped>
.debug {

    border: 1px solid red;
    height: 500px;
}
</style>