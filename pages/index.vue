<template>
  <div>
    <header class="header w-full h-full">

      <!-- HEADER BACKGROUND -->
      <div class="flex absolute top-0 left-0 h-full w-full index overflow-hidden" v-if="!notShowOnMobile">
        <div class="bg-white-linen-500 w-2/5 h-full"></div>
        <div class="bg-cinnabar-500 w-3/5 h-full"></div>
      </div>

      <!-- HEADER TITLE,TEXT,BUTTON -->
      <div class="container bg-white-linen-500 lg:bg-transparent">
        <div class="w-4/5 neco2 flex">
          <div class="w-full lg:w-2/5 h-full flex justify-center flex-col pr-10">
            <h1 class="text-4xl">
              La pizza
            </h1>
            <p class="text-lg mt-8 mb-8">
              Velit magna ullamco enim voluptate<br> enim magna.Laborisreprehenderit occaecat<br>
              nonaute incididunt incididunt cupidatat 
            </p>

            <div class="flex-col flex">
              <button class="m-0 lg:mr-5 w-48 bg-cinnabar-500 text-white-linen-500 p-4 rounded-full text-lg ">
                Objednat pizzu
              </button>

              <button class="mt-5 ms:mt-0 w-48 border-4 border-cinnabar-500 p-4 rounded-full text-lg">
                Složit vlatní pizzu
              </button>
            </div>
            
          </div>

          <!-- ACTION IMAGE SLIDER -->
          <div class="w-3/5 neco2 flex justify-end items-center" v-if="!notShowOnMobile">
            <carousel
              @next="next"    
              @prev="prev"  
            >
              <carousel-slide 
                v-for="(slide, index) in slider"
                :key="slide.id"
                :index ="index"
                :visibleSlide="visibleSlide">

                  <div class="flex flex-col items-center">
                    <img :src="require(`~/assets/images/${slide.img}`)" class="img"/>
                    <h3 class="text-2xl font-bold relative text-white-linen-500">{{ slide.title }}</h3>
                  </div>
                  
              </carousel-slide>
            </carousel>
          </div>
        </div>
      </div>

    </header>

    <main>

      <!-- DRUHÉ MENU -->
      <nav>
        <div class="container bg-light-black-500">
          <div class="w-4/5 h-full  text-white-linen-500">
            <ul class="flex-col sm:flex-row flex justify-around p-10 flex-wrap text-center">
              <li>Pizza</li>
              <li>Vegi&nbsp;Pizza</li>
              <li>Premium&nbsp;Pizza</li>
              <li>Napoje</li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- PIZZA MENU -->
      <div class="container bg-white-linen-500 flex flex-col items-center">
        <div class="w-4/5">
          <h1 class="text-4xl text-cinnabar-500 font-bold mt-10 text-center">
            Jediná pizza ve městě, co tě spolehlivě zasytí.
          </h1>
          <h2 class="text-lg text-light-gray-500 font-bold mt-5 mb-16 text-center">
            Objednávej na tel. 777 023 111 nebo prostřednictvím webových stránek. Je to easy!
          </h2>
        </div>
        
        <div class="w-4/5">
          <card-menu-display 
          v-for="Info in cardInfo"
          :key="Info.id"
          :cardSection="Info"
        />
        </div>
        
      </div>
        
    </main>

  </div>
</template>

<script>
// *****DATA*****
import {carousels} from "../assets/data.js"
import {cardSections} from "../assets/data.js"
// *****COMPONENTS*****
import CardMenuDisplay from '../components/CardMenuDisplay.vue'
import Carousel from '../components/Carousel.vue'
import CarouselSlide from '../components/CarouselSlide.vue'
import NavMenu from '../components/NavMenu.vue'

  export default {
    layout: 'no-nav',
    components: {
      CarouselSlide,
      Carousel,
      CardMenuDisplay,
      NavMenu,
    },
    data() {
      return {
        slider: carousels,
        cardInfo: cardSections,
        visibleSlide: 0,
        currentWidth: 0,
        notShowOnMobile: false,
        burger: false
      }
    },
    watch: {
    currentWidth(newValue, oldValue) {
      if (newValue != oldValue) {
          if (newValue >= 1024) {
          this.notShowOnMobile = false;
         
        } else {
          this.notShowOnMobile = true;
         
        }
      }
    },
  },
    mounted() {
      this.currentWidth = window.screen.width;
      const that = this;
      window.addEventListener("resize", function() { that.currentWidth = window.screen.width; console.log(that); console.log(this) } )
    },
    computed: {
      slidesLen() {
        return this.slider.length
      }
    },
    methods : {
      next() {
        if (this.visibleSlide >= this.slidesLen - 1) {
          this.visibleSlide = 0;
        }else{
          this.visibleSlide++;
        }
      },
      prev() {
        if (this.visibleSlide <= 0 ) {
          this.visibleSlide = this.slidesLen - 1;
        }else{
          this.visibleSlide--;
        }
      },
    },
  }
</script>

<style >
.index {
  z-index: -10;
}
.container {
 @apply w-full max-w-none flex justify-center;
}
.neco2 {
  height: 100vh;
}
.h-116{
  height: 116vh;
}
.rounded{
  border-radius: 0 0 15% 15%;
}
.img{
  width: 620px;
  height: 420px;
  z-index: -10;
}
</style>
