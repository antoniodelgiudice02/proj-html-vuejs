<script>
import { store } from '../../store'

export default {
  data() {
    return {
      store,
    }
  },

  methods: {
    scrollToHome() {
      window.scrollTo(0, 0);


    }
  }



}
</script>

<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-3">

          <div>logo</div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          <ul class="p-0">
            <li v-for="contact in store.contacts">{{ contact.contact }}</li>
          </ul>
          <div class="my-btn my-second-btn-regular">GET IN TOUCH</div>

        </div>
        <div class="col-3" v-for="card in store.footer.cards">

          <div class="card">
            <h1>{{ card.name }}</h1>
            <ul class="p-0">
              <li v-for="item in card.list"><a href="">{{ item.item }}</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>


  </footer>

  <div class="w-100 d-flex justify-content-around align-items-center">
    <span>Lorem ipsum dolor sit.</span>
    <span>Lorem ipsum dolor sit. <a href="">coding</a></span>
  </div>

  <div class="return-button" @click="scrollToHome()">
    <span>UP</span>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/style/partials/variables';

footer {
  padding: 100px 0;
  background-color: $fourth-color ;
  position: relative;

  .my-btn {
    width: fit-content;
  }

  .card {
    background-color: #19191f;

    h1 {
      color: $text-secondary-color;
      font-size: 1.3rem;
    }

    li {
      font-size: 0.9rem;
      margin: 0;
    }

    padding: 30px;
  }

  p,
  li {
    color: $text-secondary-color;
  }

  a {
    text-decoration: none;
    color: currentColor;
  }


}

.w-100 {
  span {
    color: $text-secondary-color;
  }

  background-color: black;
  padding: 20px;

  a {
    color: $secondary-color;
    text-decoration: none;
  }
}

.return-button {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: yellow;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1;
  line-height: 40px;
  vertical-align: middle;
  text-align: center;
  cursor:pointer
}
</style>