<script>
import { store } from '../../../store'

import CardServices from './CardServices.vue'


export default {
    data() {
        return {
            store,
            current: ''
        }
    },

    methods: {
        getImage() {
            return new URL('../../../images/' + this.icon, import.meta.url).href
        }
    },

    components: { CardServices },

}
</script>

<template>
    <section id="business">

        <div id="business-text-n-button" class="container d-flex justify-content-between align-items-center">
            <div class="row w-100 justify-content-between">

                <div class="text col-9 ">
                    <span class="intro">OUR BUSINESS AREAS</span>
                    <h1>Excellence in <span>Services</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quis?Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Hic, aut!</p>
                </div>

                <div class="button col-2 d-flex justify-content-center align-items-end">
                    <div class="my-btn my-btn-solid">SEE ALL</div>
                </div>

            </div>
        </div>

        <div class="container">

            <div class="row flex-wrap">
                <div class="col-4" v-for="card in store.sections[1].cards">
                    <card-services :title="card.title" :text="card.text" :icon="card.icon" />
                </div>
            </div>

        </div>

    </section>
</template>

<style lang="scss" scoped>

.card{
    cursor: pointer;
}

</style>