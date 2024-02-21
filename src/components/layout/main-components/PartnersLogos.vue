<script>
import { store } from '../../../store';
import NumbersPartner from './NumbersPartner.vue'

export default {
    data() {
        return {
            store,
        }
    },

    components:{NumbersPartner}


}
</script>

<template>
    <div id="partners" class="d-flex justify-content-center">
        <div class="container w-100 m-0 d-flex justify-content-center">
            <div v-for="image in store.sections[5].cards">
                <NumbersPartner :image="image.image" />
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped></style>