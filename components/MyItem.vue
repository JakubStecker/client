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
        <td><h6 class=""></h6></td>
        <td>
            <div class="flex justify-center items-center bg-white-linen-600 p-4 h-16 rounded-full lg:mr-6">
                <button class="p-1 rounded-full h-8 w-6 flex items-center justify-center">
                    <span class="text-2xl text-light-black-500">-</span>
                </button>

                <p class="mr-8 ml-8 text-xl">{{ item.quantity }}</p>
                
                <button class="p-1 rounded-full h-8 w-6 flex items-center justify-center">
                    <span class="text-2xl text-light-black-500">+</span>
                </button>
            </div>

        </td>
        <td>A3</td>
    </tr>
        <!-- <div class="flex w-50per bg-white-linen-600 mb-5 mr-10 h-auto">
            <img :src="require(`@/assets/images/${item.image}`)" class="w-44 h-44">
            <div class="text-container">
                <h4 class="text-2xl"> {{item.title}} <span>({{ item.size }}cm)</span></h4>
                
                <p></p>
            </div>   
        </div>
        <div class="wave w-30per h-96 bg-cinnabar-500"></div>
         -->
</template>

<script>
import { mapMutations } from "vuex"
    export default {
        props: ['item'],
        methods: {
            ...mapMutations(['countChecked'])
        }
    }
</script>

<style scoped>
.w-30per {
    width: 30%;
}
.w-50per {
    width: 50%;
}
.wave {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
}
.wave::before,
.wave::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background-repeat: repeat-x;
}

.wave::before {
    height: 10px;
    background-size: 20px 20px;
    background-image: radial-gradient(circle at 10px -5px, transparent 12px, #f5f0ea 13px);
}

.wave::after {
    height: 15px;
    background-size: 40px 20px;
    background-image: radial-gradient(circle at 10px 15px, #f5f0ea 12px, transparent 13px);
}


</style>