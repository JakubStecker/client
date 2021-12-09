<template>
    <div v-if="product" class="bg-white-linen-500 h-full">
        <!-- <div class="container flex fixed bg-light-black-500" :class="{'': !mobileMenu}">
            <div class="h-screen top-0 left-0 right-0 bottom-0 bg-light-black-500 z-10 opacity-90 absolute" v-if="mobileMenu"></div>
            <nav-menu :mobileMenu="mobileMenu" :isMobile="isMobile" @showing ="showMenu"/>
        </div> -->

        <div class="container">
            <div class="flex w-4/5 h-100 items-center justify-center">
                <div class="flex flex-col lg:flex-row">
                    <img :src="require(`@/assets/images/${product.image}`)" class="image w-full lg:w-5/12 mr-0 lg:mr-20 "/>
                    <div class="mt-0 lg:mt-20 flex flex-col">
                        <h1 class="mb-5 text-3xl text-center lg:text-left">{{ product.title }}</h1>
                        <h4 class="mb-5 text-lg text-light-gray-500 text-center lg:text-left">{{ product.ingredients }}</h4>
                        <h4 class="mb-5 text-lg">Množství:</h4>
                        <div class="flex flex-col sm:flex-row justify-between">

                            <div class="flex justify-center items-center bg-white-linen-600 p-4 h-16 rounded-full lg:mr-6">
                                <button @click="minus" class="p-1 rounded-full h-8 w-6 flex items-center justify-center">
                                    <span class="text-2xl text-light-black-500">-</span>
                                </button>

                                <p class="mr-8 ml-8 text-xl">{{ quantity }}</p>
                                
                                <button @click="plus" class="p-1 rounded-full h-8 w-6 flex items-center justify-center">
                                    <span class="text-2xl text-light-black-500">+</span>
                                </button>
                            </div>

                            <button class="bg-cinnabar-500 text-white-linen-500 rounded-full h-16 px-5 font-bold flex justify-center items-center" @click="() => {addItem({id: product.id, quantity: quantity}); finalPriceMethod(product.id)}">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="basket-shopping" class="svg-inline--fa fa-basket-shopping w-6 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M560 192l-101.6 .002l-93.11-179.1c-6.062-11.72-20.61-16.37-32.36-10.22c-11.78 6.094-16.34 20.59-10.22 32.34l81.61 156.9H171.7l81.61-156.9C259.4 23.32 254.9 8.822 243.1 2.728C231.3-3.397 216.8 1.228 210.7 12.95l-93.11 179.1L16 192c-8.836 0-16 7.164-16 15.1v32c0 8.836 7.164 15.1 16 15.1h23.11l45.75 205.9C91.37 491.2 117.3 512 147.3 512h281.3c29.1 0 55.97-20.83 62.48-50.12l45.75-205.9H560c8.838 0 16-7.164 16-15.1v-32C576 199.2 568.8 192 560 192zM192 432c0 8.834-7.166 15.1-16 15.1c-8.832 0-16-7.166-16-15.1V304c0-8.834 7.168-15.1 16-15.1c8.834 0 16 7.166 16 15.1V432zM304 432c0 8.834-7.166 15.1-16 15.1c-8.832 0-16-7.165-16-15.1V304c0-8.834 7.168-15.1 16-15.1c8.834 0 16 7.166 16 15.1V432zM416 432c0 8.834-7.166 15.1-16 15.1c-8.832 0-16-7.166-16-15.1V304c0-8.834 7.168-15.1 16-15.1c8.834 0 16 7.166 16 15.1V432z"></path></svg>
                                Vložit do košíku
                            </button>
                        </div>
                        <div class="flex justify-between">
                            <div class="mt-2">
                                <div>
                                    <input type="radio" name="radio" id="1" value="25" v-model="pickedPizzaPrice" @click="checked" @change="() => {sizeCheck({id: product.id, pizzaSize: 33})}">
                                    <label for="1">33cm</label>
                                </div>
                                <div>
                                    <input type="radio" name="radio" id="2" value="35" v-model="pickedPizzaPrice" @click="checked" @change="() => {sizeCheck({id: product.id, pizzaSize: 40})}">
                                    <label for="2">40cm</label>
                                </div>
                                <div>
                                    <input type="radio" name="radio" id="3" value="40" v-model="pickedPizzaPrice" @click="checked" @change="() => {sizeCheck({id: product.id, pizzaSize: 50})}">
                                    <label for="3">50cm</label>
                                </div>
                            </div>

                            <div class="mt-5" v-show="boolChecked">
                                <h1 class="text-xl border-l-4 border-cinnabar-500 pl-4 mb-2 ">
                                    Něco navíc<span class="text-light-gray-500 ml-2 absolute">({{ product.price }}Kč)</span>
                                </h1>
                                <div class="block">
                                    <div class="mt-2">
                                        <div>
                                            <input type="checkbox" id="ananas" class="form-checkbox text-cinnabar-500" value="Ananas" v-model="checkedIngredients" @change="() => {ingredientsCheck({ id: product.id, checkedIngredients: checkedIngredients, pickedPizzaPrice: pickedPizzaPrice})}">
                                            <label for="ananas">Ananas<span class="text-light-gray-500 ml-2">({{pickedPizzaPrice}}Kč)</span></label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="sunka" class="form-checkbox text-cinnabar-500" value="Sunka" v-model="checkedIngredients" @change="() => {ingredientsCheck({ id: product.id, checkedIngredients: checkedIngredients, pickedPizzaPrice: pickedPizzaPrice})}">
                                            <label for="sunka">Šunka<span class="text-light-gray-500 ml-2">({{pickedPizzaPrice}}Kč)</span></label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="syr" class="form-checkbox text-cinnabar-500" value="Syr" v-model="checkedIngredients" @change="() => {ingredientsCheck({ id: product.id, checkedIngredients: checkedIngredients, pickedPizzaPrice: pickedPizzaPrice})}">
                                            <label for="syr">Sýr<span class="text-light-gray-500 ml-2">({{pickedPizzaPrice}}Kč)</span></label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="spenat" class="form-checkbox text-cinnabar-500" value="Spenat" v-model="checkedIngredients" @change="() => {ingredientsCheck({ id: product.id, checkedIngredients: checkedIngredients, pickedPizzaPrice: pickedPizzaPrice})}">
                                            <label for="spenat">Špenát<span class="text-light-gray-500 ml-2">({{pickedPizzaPrice}}Kč)</span></label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="rukola" class="form-checkbox text-cinnabar-500" value="Rukola" v-model="checkedIngredients" @change="() => {ingredientsCheck({ id: product.id, checkedIngredients: checkedIngredients, pickedPizzaPrice: pickedPizzaPrice})}">
                                            <label for="rukola">Rukola<span class="text-light-gray-500 ml-2">({{pickedPizzaPrice}}Kč)</span></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </div>

        <div class="container bg-cinnabar-500 mb-20 p-5 lg:p-20">
            <div class="w-4/5 flex flex-col justify-center items-center">
                <h1 class="mb-5 mt-5 text-3xl text-white-linen-500 text-center lg:text-left">Pizza {{ product.title }}</h1>
                <p class="text-center text-white-linen-500">
                    {{ product.snippet }}
                </p>
            </div>
        </div>
        <div class="container">
            <Reviews />
        </div>
        
    </div>
    
</template>

<script>
import { mapMutations } from "vuex"
    export default {
        data() {
            return {
                boolChecked:false,
                pickedPizzaPrice: 0,
                checkedIngredients: [],
                quantity: 1
            }
        },
        computed: {
            product() {
                return this.$store.getters.getProductById(this.$route.params.id)
            }
        },
        methods: {
            checked() {
                this.boolChecked = true
            },
            minus() {
                if (this.quantity != 1) 
                    this.quantity--;
            },
            plus() {
                this.quantity++;
            },
            ...mapMutations(['addItem', 'sizeCheck', 'ingredientsCheck', 'finalPriceMethod'])
        }
    }
</script>

<style scoped>
.h-100 {
    height: 100vh;
}
.btn {
    /* @apply border-2 border-light-black-500 rounded-full h-16 w-16 flex justify-center items-center mt-2 mr-2; */
}
@media screen and (max-width: 1024px){
    .h-100{
        height: 125vh;
    }
    .image {
        max-width: 404px;
    }

}
</style>