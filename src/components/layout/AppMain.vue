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
            current: ''
        }
    },

   
    components: { ServicesSection, SectionAbout, SectionProjects, SectionResults, PartnersLogos, GetInTouch },

}
</script>

<template>
    
    <nav class="d-flex justify-content-around align-items-center debug">
        <span>logo</span>
        <ul class="p-0 m-0 d-flex align-items-center">
            <li v-for="(section, index) in store.sections">{{ section.name }}</li>

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

    <ServicesSection :class="sectionClass"/>

    <SectionAbout/>

    <SectionProjects/>

    <SectionResults/>

    <PartnersLogos/>

    <GetInTouch/>

    


</template>

<style lang="scss" scoped>
// @use '../../assets/style/general.scss';

.fixed{
    position: fixed;
}

.debug {

    border: 1px solid red;
}

.debug2 {

    border: 1px solid red;
}
</style>