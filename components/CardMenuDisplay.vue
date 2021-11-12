<template>
    <div class="">
        <div class="">
            <h4 :class="cardSection.style" class="font-bold font text-4xl border-b-8 w-full flex justify-center pb-5 mt-10 mb-10 text-center">
            {{ cardSection.title }}
            </h4>
        </div>
        
        <div class="flex flex-wrap">
            <card-menu 
                v-for="card in cardSection.cards"
                :key="card.id"
                :card="card"
            />
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            cardSection: {
                type: Object,
                required: true
            }
        }
            
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@700&display=swap');

.font{
    font-family: 'Yanone Kaffeesatz', sans-serif;
}
</style>