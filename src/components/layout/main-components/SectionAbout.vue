<script>
import { store } from '../../../store'

import CardNetwork from './CardNetwork.vue'



export default {
    data() {
        return {
            store,
        }
    },

    components: { CardNetwork }

}
</script>

<template>
    <section id="network" class="d-flex">

        <div class="network-container d-flex flex-column align-items-end w-50">

            <div id="network-text" class="container m-0 d-flex justify-content-start align-items-center">
                <div class="row justify-content-between">

                    <div class="text col ">
                        <span class="intro">ABOUT THE NETWORK</span>
                        <h1><span>The</span>Company</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quis?Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Hic, aut!</p>
                    </div>



                </div>
            </div>

            <div id="network-content" class="container m-0">

                <div class="row">
                    <div class="col-6" v-for="card in store.sections[2].cards">
                        <card-network :title="card.title" :text="card.text" :icon="card.icon" />
                    </div>
                </div>

                <div class="button d-flex align-items-center">
                    <div class="my-btn my-btn-solid">GET IN TOUCH</div>
                    <div class="my-btn my-second-btn-regular mx-3">READ MORE</div>
                </div>

            </div>

        </div>

        <div class="image-container">
            <img src="../../../images/about-4.jpg" alt="">
        </div>

    </section>
</template>

<style lang="scss" scoped></style>