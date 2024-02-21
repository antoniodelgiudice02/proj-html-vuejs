<script>
import { store } from '../../store'

import ServicesSection from './main-components/ServicesSection.vue'
import SectionAbout from './main-components/SectionAbout.vue'
import SectionProjects from './main-components/SectionProjects.vue'
import SectionResults from './main-components/SectionResults.vue'
import PartnersLogos from './main-components/PartnersLogos.vue'
import GetInTouch from './main-components/GetInTouch.vue'


export default {
    data() {
        return {
            store,
            sectionClass: '',
            current: 0
        }
    },


    components: { ServicesSection, SectionAbout, SectionProjects, SectionResults, PartnersLogos, GetInTouch },

    methods: {
        increase() {
            if (this.current >= this.store.sections.length - 1) {
                this.current = 0
                console.log(this.current)
            } else {
                this.current++
                console.log(this.current)
            }
        },

        scrollToSection(i) {
            if (i == 0) {
                window.scrollTo(0, 0);
            }
            if (i == 1) {
                window.scrollTo(0, 720);
            }
            if (i == 2) {
                window.scrollTo(0, 1490);
            }
            if (i == 3) {
                window.scrollTo(0, 2170);
            }
            if (i == 4) {
                window.scrollTo(0, 3070);
            }
        },
        scrollToContacts(){
            window.scrollTo(0, 3690);
        }

    }

}
</script>

<template>
    <main>

        

        <nav class="d-flex justify-content-around align-items-center">
            <span>logo</span>
            <ul class="p-0 m-0 d-flex align-items-center">
                <li v-for="(section, index) in store.sections" @click="scrollToSection(index)">{{ section.name }}</li>

                <li>
                    <div class="btn btn-primary" @click="scrollToContacts()"> click</div>
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



        <ServicesSection :class="sectionClass" />

        <SectionAbout />

        <SectionProjects />

        <SectionResults />

        <PartnersLogos />

        <GetInTouch />

    </main>
</template>

<style lang="scss" scoped>
// @use '../../assets/style/general.scss';



nav {
    position: fixed;
    right: 0;
    width: 100vw;
    top: 45px;
    z-index: 1;
    background-color: white;
}

main {
    position: relative;
    #jumbo{
        margin-top: 90px;
    }
}

.debug {

    border: 1px solid red;
}

.debug2 {

    border: 1px solid red;
}
</style>