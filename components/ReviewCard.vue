<template>
    <div class="mt-6 h-16 flex">
        <div>
            <img :src="review.picture.large" class="w-16 h-16 rounded-full"/>
        </div>
        <div class="ml-8" >
            <h6>{{review.login.username}}</h6>
            <p class="text-light-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quam magni beatae possimus debitis.</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['review'],
    }
</script>

<style scoped>

</style>