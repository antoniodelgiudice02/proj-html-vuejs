<script>
import { store } from '../../../store'

export default {
    data() {
        return {
            store,
        }
    },


}
</script>

<template>
    <section id="contacts">

        <div class="container">

            <div class="row ">
                <div class="col-7">

                    <div class="contacts-text col ">
                        <span class="intro">SEND A MESSAGE</span>
                        <h1>Get in<span>Touch</span></h1>
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

                    <ul class="p-0" v-for="info in store.contacts">
                        <li>{{ info.phoneNumber }}</li>
                        <li>{{ info.eMail }}</li>
                        <li>{{ info.address }}</li>
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
</style>