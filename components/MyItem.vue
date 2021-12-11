<template>
    <tr class="border-t-4 border-b-4 border-white-linen-600">
        <td class="flex">
            <img :src="require(`@/assets/images/${item.image}`)" class="w-44 h-44">
            <div class="flex flex-col justify-center">
                <h4 class="text-xl"> {{item.title}} <span>({{ item.size }}cm)</span></h4>
                <div class="flex">
                    <p v-for="(ingredients, index) in item.selectedIngredients" :key="index">
                        {{ ingredients }},
                    </p> 
                </div>
                
            </div>
            
        </td>
        <td>
            <div>
               <h6 class="">Pizza: {{item.price}}Kč</h6>
               <h6 class="">Věci navíc: {{item.ingredientsPrice}}Kč</h6>
            </div>
            
        </td>
        <td>
            <div class="flex justify-center items-center bg-white-linen-600 p-4 h-12 rounded-full lg:mr-6">
                <button class="p-1 rounded-full h-8 w-2 flex items-center justify-center" @click="() => {subQuantity({id: item.id, ing: item.selectedIngredients, size: item.size}); finalPriceMethod({id: item.id, ing: item.selectedIngredients, size: item.size})}">
                    <span class="text-xl text-light-black-500">-</span>
                </button>

                <p class="mr-8 ml-8 text-xl">{{ item.quantity }}</p>
                
                <button class="p-1 rounded-full h-8 w-2 flex items-center justify-center" @click="() => {addQuantity({ id: item.id, ing: item.selectedIngredients, size: item.size}); finalPriceMethod({id: item.id, ing: item.selectedIngredients, size: item.size})}">
                    <span class="text-xl text-light-black-500">+</span>
                </button>
            </div>
        </td>
        <td>{{item.totalSum}}</td>
    </tr>   
</template>

<script>
import { mapMutations } from "vuex"
import { state } from '~/store'
    export default {
        props: ['item'],
        data() {
            return {
            }
        },
        methods: {
            ...mapMutations(['countChecked', 'subQuantity', 'addQuantity', 'finalPriceMethod']),
        },
        computed: {
            total() {

            }
        }
    }
</script>

<style scoped>

</style>