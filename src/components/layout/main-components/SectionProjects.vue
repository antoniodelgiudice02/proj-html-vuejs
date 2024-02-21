<script>
import { store } from '../../../store'

import CardProjects from './CardProjects.vue'





export default {
    data() {
        return {
            store,
        }
    },

    components: { CardProjects }

}
</script>

<template>
    <section id="projects">

        <div class="container">

            <div id="projects-text-n-filter" class="container d-flex justify-content-center align-items-center">
                <div class="row text-center">

                    <div class="text col ">
                        <span class="intro">WE DO MORE FOR EVERYONE</span>
                        <h1>Actions & <span>Projects</span></h1>
                    </div>

                    <div class="filter">
                        <ul class="d-flex p-0 justify-content-center">
                            <li>filter</li>
                            <li>filter</li>
                            <li>filter</li>
                            <li>filter</li>
                            <li>filter</li>
                            <li>filter</li>
                            <li>filter</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div class="card-container">

                <div class="row">
                    <div class="col-4" v-for="card in store.sections[3].cards">
                        <CardProjects :title="card.title" :image="card.image" />
                    </div>
                </div>

            </div>

        </div>

    </section>
</template>

<style lang="scss" scoped></style>