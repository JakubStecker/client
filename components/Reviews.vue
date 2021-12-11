<template>
    <div class="container">
        <div class="w-4/5 mb-10">
            <div class="flex justify-center">
                <h3 class="text-3xl">Customer review</h3>
            </div>
            <div v-if="!$fetchState.pending" class="flex flex-col items-center">
                <ReviewCard 
                    v-for="reviewer in reviewers.results"
                    :key="reviewer.login.uuid"
                    :review="reviewer"
                />
            </div>
        </div>
    </div>
</template>

<script>
import ReviewCard from './ReviewCard.vue'
    export default {
  components: { ReviewCard },
        data() {
            return {
                reviewers: []
            }
        },
        async fetch() {
            try {
                this.reviewers = await fetch(
                    'https://randomuser.me/api/?results=5'
                ).then(res => res.json())  
            } catch(e) {
                console.log(e);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>