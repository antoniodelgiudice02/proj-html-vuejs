<script>
import { store } from '../../../store'

import CardNumbers from './CardNumbers.vue'





export default {
    data() {
        return {
            store,
        }
    },

    components: { CardNumbers }

}
</script>

<template>
    <section id="numbers">

        <div id="numbers-text" class="container d-flex justify-content-center align-items-center">
            <div class="row text-center">

                <div class="text col ">
                    <span class="intro">WHAT ARE WE DOING</span>
                    <h1><span>Results</span>in Numbers</h1>
                </div>

            </div>
        </div>

        <div class="container">

            <div class="row justify-content-center">
                <div class="col-3" v-for="card in store.sections[4].cards">
                    <CardNumbers :title="card.title" :text="card.text" />
                </div>
            </div>

        </div>



    </section>
</template>

<style lang="scss" scoped></style>