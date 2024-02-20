<script>
import { store } from '../../store'

import CardBusiness from './main-components/CardBusiness.vue'
import CardNetwork from './main-components/CardNetwork.vue'
import CardProjects from './main-components/CardProjects.vue'

export default {
    data() {
        return {
            store,
        }
    },

    components: {  CardBusiness, CardNetwork, CardProjects },

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
    <app-hero />

    <!-- <div class="section debug" v-for="(section, index) in store.sections">

        <div class="container debug">

            <app-section :class="'section' + index.toString()" class="default debug" :title="section.title"
                :name="section.name" :paragraph="section.paragraph" :cards="section.cards">
            </app-section>

        </div>

    </div> -->

    <section id="business" class="debug">

        <div id="business-text-n-button" class="container d-flex justify-content-between align-items-center">
            <div class="row w-100 justify-content-between">

                <div class="text col-9 debug2 ">
                    <span>titolo</span>
                    <h1>titolo</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quis?Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Hic, aut!</p>
                </div>

                <div class="button col-2 d-flex justify-content-center align-items-center debug2">
                    <div class="btn btn-primary">vai</div>
                </div>

            </div>
        </div>

        <div class="container debug">

            <div class="row flex-wrap">
                <div class="col-4" v-for="card in store.cardBusiness">
                    <card-business
                    :title="card.title"
                    :text="card.text"/>
                </div>
            </div>

        </div>

    </section>

    <section id="network" class="debug">

        <div id="network-text" class="container d-flex justify-content-start align-items-center">
            <div class="row w-50 justify-content-between">

                <div class="text col debug2 ">
                    <span>titolo</span>
                    <h1>titolo</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quis?Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Hic, aut!</p>
                </div>



            </div>
        </div>

        <div class="container debug">

            <div class="row w-50">
                <div class="col-6" v-for="card in store.cardNetwork">
                    <card-network
                    :title="card.title"
                    :text="card.text"/>
                </div>
            </div>

            <div class="button w-50 d-flex align-items-center debug2">
                <div class="btn btn-primary">vai</div>
                <div class="btn btn-light mx-3">vai</div>
            </div>

        </div>

    </section>

    <section id="projects" class="debug">

        <div class="container debug">

            <div id="projects-text-n-filter" class="container d-flex justify-content-center align-items-center">
                <div class="row text-center">

                    <div class="text col debug2 ">
                        <span>titolo</span>
                        <h1>titolo</h1>
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
                        <CardProjects
                        :title="card.title"
                        :image="card.image"/>
                    </div>
                </div>

            </div>

        </div>

    </section>



    <section id="numbers" class="debug">

        <div id="numbers-text" class="container d-flex justify-content-center align-items-center">
            <div class="row text-center">

                <div class="text col debug2 ">
                    <span>titolo</span>
                    <h1>titolo</h1>
                </div>

            </div>
        </div>

        <div class="container debug">

            <div class="row justify-content-center">
                <div class="col-3">
                    <div class="card"></div>
                </div>
                <div class="col-3">
                    <div class="card"></div>
                </div>
                <div class="col-3">
                    <div class="card"></div>
                </div>
                <div class="col-3">
                    <div class="card"></div>
                </div>
            </div>

        </div>

        <div class="container debug">
            <div class="row">
                <div class="col-2">
                    <img src="" alt="">
                </div>
                <div class="col-2">
                    <img src="" alt="">
                </div>
                <div class="col-2">
                    <img src="" alt="">
                </div>
                <div class="col-2">
                    <img src="" alt="">
                </div>
                <div class="col-2">
                    <img src="" alt="">
                </div>
                <div class="col-2">
                    <img src="" alt="">
                </div>
            </div>
        </div>

    </section>

    <section id="contacts" class="debug">

        <div class="container debug">

            <div class="row debug">
                <div class="col-7">

                    <div class="contacts-text col debug2 ">
                        <span>titolo</span>
                        <h1>titolo</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidque distinctio vel unde cumque
                            laboriosam esse. Dicta, atque repellat.</p>
                    </div>

                    <div id="contacts-form" class="d-flex flex-wrap justify-content-between">

                        <div class="col-5">
                            <label for="exampleFormControlInput1" class="form-label"></label>
                            <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="name">
                        </div>

                        <div class="col-5">
                            <label for="exampleFormControlInput1" class="form-label"></label>
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="name@example.com">
                        </div>

                        <div class="col-5">
                            <label for="exampleFormControlInput1" class="form-label"></label>
                            <input type="phone" class="form-control" id="exampleFormControlInput1" placeholder="Phone">
                        </div>

                        <div class="col-5">

                            <select class="form-select" aria-label="Default select example">
                                <option selected>Other info</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                        </div>

                        <div class="form-floating col-12">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                style="height: 100px"></textarea>
                            <label for="floatingTextarea2">Comments</label>
                        </div>

                        <div>
                            <div class="btn btn-primary">invia</div>
                        </div>
                    </div>


                </div>
                <div class="col-5">

                    <h2>titolo</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, eveniet?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <ul class="p-0">
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                    </ul>

                    <div>
                        <div class="btn btn-light">invia</div>
                    </div>

                </div>
            </div>

        </div>

    </section>

</template>

<style lang="scss" scoped>

section{
    padding: 50px 0;
}
.container{
    width: 60%;
}

#contacts-form {
    div {
        display: flex;
        align-items: center;
        margin: 10px 0;
    }
}

li {
    list-style: none;
    margin: 0 10px;
}



.my-form {
    height: 50px;
}

.debug {

    border: 1px solid red;
}

.debug2 {

    border: 1px solid red;
}
</style>