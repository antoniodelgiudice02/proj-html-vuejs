<script>
import { store } from '../../store'

import CardBusiness from './main-components/CardBusiness.vue'
import CardNetwork from './main-components/CardNetwork.vue'
import CardProjects from './main-components/CardProjects.vue'
import CardNumbers from './main-components/CardNumbers.vue'
import NumbersPartner from './main-components/NumbersPartner.vue'

export default {
    data() {
        return {
            store,
        }
    },

    components: { CardBusiness, CardNetwork, CardProjects, CardNumbers, NumbersPartner },

    // methods:{
    //     assignColClass(index){
    //         if (index == 0 || 2){
    //             this.colClass = 'col-4'
    //         }
    //         if (index == 1){
    //             this.colClass = 'col-6'
    //         }
    //         if (index == 3){
    //             this.colClass = 'col-3'
    //         }

    //         return this.colClass
    //     }
    // }



}
</script>

<template>
    <nav class="d-flex justify-content-around align-items-center debug">
        <span>logo</span>
        <ul class="p-0 m-0 d-flex align-items-center">
            <li>nav item</li>
            <li>nav item</li>
            <li>nav item</li>
            <li>nav item</li>
            <li>nav item</li>
            <li>
                <div class="btn btn-primary"> click</div>
            </li>
        </ul>
    </nav>

    <section id="jumbo" class="d-flex justify-content-center align-items-center">


        <div class="container d-flex justify-content-center align-items-center">

            <div class="w-50">
                <div class="text text-center">
                    <h1>Ready <span>Team</span></h1>
                    <p>No matter what your company needs, we will ready to assist you in the best possible way.</p>
                </div>
                <div class="d-flex justify-content-center">
                    <div class="my-btn my-btn-solid">GET IN TOUCH</div>
                    <div class="my-btn my-btn-regular">READ MORE</div>
                </div>

            </div>
        </div>

    </section>

    <section id="business" class="debug">

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

        <div class="container debug">

            <div class="row flex-wrap">
                <div class="col-4" v-for="card in store.cardBusiness">
                    <card-business :title="card.title" :text="card.text" :icon="card.icon"/>
                </div>
            </div>

        </div>

    </section>

    <section id="network" class="debug">

        <div id="network-text" class="container d-flex justify-content-start align-items-center">
            <div class="row w-50 justify-content-between">

                <div class="text col ">
                    <span class="intro">ABOUT THE NETWORK</span>
                    <h1><span>The</span>Company</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quis?Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Hic, aut!</p>
                </div>



            </div>
        </div>

        <div class="container debug">

            <div class="row w-50">
                <div class="col-6" v-for="card in store.cardNetwork">
                    <card-network :title="card.title" :text="card.text" />
                </div>
            </div>

            <div class="button w-50 d-flex align-items-center">
                <div class="my-btn my-btn-solid">GET IN TOUCH</div>
                <div class="my-btn my-second-btn-regular mx-3">READ MORE</div>
            </div>

        </div>

    </section>

    <section id="projects" class="debug">

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

            <div class="container debug">

                <div class="row">
                    <div class="col-4" v-for="card in store.cardProjects">
                        <CardProjects :title="card.title" :image="card.image" />
                    </div>
                </div>

            </div>

        </div>

    </section>

    <section id="numbers" class="debug">

        <div id="numbers-text" class="container d-flex justify-content-center align-items-center">
            <div class="row text-center">

                <div class="text col debug2 ">
                    <span class="intro">WHAT ARE WE DOING</span>
                    <h1><span>Results</span>in Numbers</h1>
                </div>

            </div>
        </div>

        <div class="container debug">

            <div class="row justify-content-center">
                <div class="col-3" v-for="card in store.cardNumbers">
                    <CardNumbers :title="card.title" :text="card.text" />
                </div>
            </div>

        </div>



    </section>

    <div id="partners" class="d-flex justify-content-center">
        <div class="container w-100 m-0 d-flex debug">
            <div class="col-2" v-for="image in store.partners">
                <NumbersPartner :image="image.image" />
            </div>

        </div>
    </div>

    <section id="contacts" class="debug">

        <div class="container">

            <div class="row ">
                <div class="col-7">

                    <div class="contacts-text col ">
                        <span class="intro">SEND A MESSAGE</span>
                        <h1>Get in<SPAN>Touch</SPAN></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidque distinctio vel unde cumque
                            laboriosam esse. Dicta, atque repellat.</p>
                    </div>

                    <div id="contacts-form" class="d-flex flex-wrap justify-content-between">

                        <div class="col-6">
                            <input type="name" class="my-form-control" id="exampleFormControlInput1" placeholder="Name">
                        </div>

                        <div class="col-6">
                            <input type="email" class="my-form-control" id="exampleFormControlInput1"
                                placeholder="name@example.com">
                        </div>

                        <div class="col-6">
                            <input type="phone" class="my-form-control" id="exampleFormControlInput1" placeholder="Phone">
                        </div>

                        <div class="col-6">

                            <select class="my-form-control" aria-label="Default select example">
                                <option selected>Other info</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                        </div>

                        <div class="form-floating col-12">
                            <textarea class="my-form-control" placeholder="Message" id="floatingTextarea2"
                                style="height: 100px"></textarea>
                            <label for="floatingTextarea2"></label>
                        </div>

                        <div>
                            <div class="my-btn my-btn-solid">invia</div>
                        </div>
                    </div>


                </div>
                <div class="col-5">

                    <h2>Example Inc.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, eveniet?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <ul class="p-0">
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                    </ul>

                    <div>
                        <div class="my-btn my-btn-regular">invia</div>
                    </div>

                </div>
            </div>

        </div>

    </section>
</template>

<style lang="scss" scoped>
// @use '../../assets/style/general.scss';

.debug {

    border: 1px solid red;
}

.debug2 {

    border: 1px solid red;
}
</style>