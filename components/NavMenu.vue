<template>
  <div class="container flex fixed top-0 bg-light-black-500 z-50">
    <div class="h-screen top-0 left-0 right-0 bottom-0 bg-light-black-500 opacity-75 absolute" v-if="mobileMenu"></div>
    <nav class="flex flex-col lg:flex-row lg:justify-between w-4/5 lg:items-center h-15vh z-20">
      <div class="flex items-center justify-between h-full">
        <h2 class="text-6xl text-cinnabar-500 font-extrabold">
          <NuxtLink to="/">
            PIZZA
          </NuxtLink>
        </h2>
        <div class="items-center z-20 inline-block lg:hidden" @click="showMenu">
          <div class="w-12 h-2 bg-white-linen-500 rounded-md mb-2"></div>
          <div class="w-12 h-2 bg-white-linen-500 rounded-md mb-2"></div>
          <div class="w-12 h-2 bg-white-linen-500 rounded-md"></div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row h-3/4" v-if="!isMobile || mobileMenu">
        <ul class="flex flex-col lg:flex-row text-4xl lg:text-lg items-center text-white-linen-500 font-bold" @click="showMenu">
          <NuxtLink
            v-for="liLink in navLinks"
            :key="liLink.id"
            :to="liLink.link"
            class="li lg:mr-6">{{ liLink.li }}
          </NuxtLink>
          <li class="li mr-4 lg:mr-0">
            <NuxtLink to="/shoppingCart">
              <button class="w-48 lg:w-20 p-6 lg:p-2 rounded-full bg-white-linen-500 flex justify-center items-center">
                <svg class="w-12 lg:w-6 text-cinnabar-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p class="text-cinnabar-500 font-bold">{{cartArr.length}}</p>
              </button>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
    export default {
        data() {
            return {
              currentWidth: 0,
              isMobile: false,
              mobileMenu: false,
              cartArr: this.$store.getters.getCart
            }
        },
        methods: {
            showMenu() {
              if (this.isMobile) {
                this.mobileMenu = !this.mobileMenu
              }
            }
        },
        watch: {
          currentWidth(newValue, oldValue) {
            if (newValue !== oldValue) {
                if (newValue >= 1024) {
                this.isMobile = false;
              
              } else {
                this.isMobile = true;
              
              }
            }
          }
        },
        mounted() {
          this.currentWidth = window.screen.width;
          const that = this;
          window.addEventListener("resize", function() { that.currentWidth = window.screen.width; } )
        },
        computed: {
          navLinks() {
            return this.$store.getters.getNavLinks()
          }
        }
  }
</script>

<style scoped>
.h-15vh {
  height: 15vh;
}
</style>