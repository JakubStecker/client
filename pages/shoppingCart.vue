<template>
    <div class="container bg-white-linen-500">
        <div class="w-4/5 min-h-screen m-15vh">
            <div class="flex justify-center">
                <h1 class="text-6xl mt-5 mb-10 font-semibold ">Váš košík</h1>
            </div>
            <div class="flex justify-between">
                <div class="w-4/6">
                    <table class="w-full">
                        <tr class="text-light-gray-500 text-lg">
                            <th class="p-2">Produkt</th>
                            <th>Cena</th>
                            <th>Počet</th>
                            <th>Finální cena</th>
                        </tr>
                        <MyItem 
                            v-for="(item, index) in inCart"
                            :key="index"
                            :item="item"
                        />
                    </table>
                </div>
                <div class="wave w-30per h-96 bg-cinnabar-500 flex flex-col justify-around p-8">
                    <h2 class="text-white-linen-500 font-bold text-2xl mb-5">Celkem k platbě</h2>
                    <div class="flex justify-between">
                        <h4 class="text-white text-lg">Mezisoučet</h4>
                        <h4 class="text-white text-lg">{{mezisoucet}}Kč</h4>
                    </div>
                    <div class="flex justify-between border-t-2 border-white-linen-500">
                        <h4 class="text-white text-lg">Doprava</h4>
                        <div class="flex flex-col">
                          <h4 class="text-white text-lg text-right">{{doprava}}Kč</h4>
                          <p class="text-white text-right text-sm">Možnosti přepravy budou aktualizovány na stránce pokladny.</p> 
                        </div>
                        
                    </div>
                    <div class="flex justify-between border-t-2 border-white-linen-500">
                        <h4 class="text-white text-lg">Cena celkem</h4>
                        <h4 class="text-white text-lg">{{celkem}}Kč</h4>
                    </div>
                </div>  
            </div>
            
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"
    export default {
        data() {
            return {
                cartArr: this.$store.getters.getCart,
            }
        },
        computed: {
            ...mapState(['inCart']),
            mezisoucet() {
                let cartArr = this.$store.getters.getCart
                let total = 0
                cartArr.forEach(item => {
                    total += item.totalSum
                });
                return total
            },
            doprava() {
                if (this.mezisoucet > 600) {
                    return 0
                }
                else {
                    return 90
                }
            },
            celkem() {
                if (this.mezisoucet === 0) return 0
                else return this.mezisoucet + this.doprava
            }
        },
        method: {
            // subtotal() {
            //     let sum = 0
            //     for (let i = 0; i < this.cartArr.length; i++) {
            //         const item = this.cartArr[i]
            //         sum += item.price
            //     } 
            //     return sum
            // }
        }
    }
</script>

<style scoped>
.m-15vh{
    margin-top: 15vh;
}
.w-30per {
    width: 30%;
}
.w-50per {
    width: 50%;
}
.wave {
    display: flex;
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