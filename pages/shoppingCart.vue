<template>
    <div class="container bg-white-linen-500">
        <div class="w-4/5 h-screen m-15vh">
            <div class="flex justify-center">
                <h1 class="text-6xl mt-5 mb-10 font-semibold ">Váš košík</h1>
            </div>
            <table>
                <tr class="text-light-gray-500">
                    <th>Produkt</th>
                    <th>Cena</th>
                    <th>Počet</th>
                    <th>Finální cena</th>
                </tr>
                <MyItem 
                    v-for="item in inCart"
                    :key="item.id"
                    :item="item"
                />
            </table>
            <div>
                
            </div>
            
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"
    export default {
        computed: {
            ...mapState(['inCart'])
        }
    }
</script>

<style scoped>
.m-15vh{
    margin-top: 15vh;
}
</style>