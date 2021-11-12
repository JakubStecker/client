<template>
    <div class="group card w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center rounded-3xl hover transition-colors duration-300 mb-6">
        <img class="image" :src="require(`@/assets/images/${card.image}`)" alt="">
        <h3 class="header text-center">
            {{ card.title }}
        </h3>
        <p class="snippet text-center my-4 text-light-gray-500 group-hover:text-white-linen-500">
            {{ card.ingredients }}
        </p>
        <NuxtLink :to="`/products/${card.id}`">
            <button class="bg-cinnabar-500 text-white-linen-500 p-3 px-6 rounded-full flex transition-colors duration-300 hover2">
                <span class="font-bold">Vyber rozměr</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
            </button>
        </NuxtLink>
    </div>
</template>

<script>
    export default {
        props: {
            card: {
                type: Object,
                required: true
            },
        }
    }
</script>

<style scoped>
.card {
    border: none;
    overflow: hidden;
    padding: 0;
    cursor: pointer;
}
.cardWidth {
    width: 25%;
}
.image {
    height: 65%;
    border-radius: 0.5rem;
}
.header {
    font-size: 1.15rem;
    margin-top: 0.4rem;
}
.hover:hover {
    background-color: #d72d2b;
    color: #f5f0ea;
}
.hover:hover{
    animation-name: hover;
    animation-timing-function:
    ease;
}
@keyframes hover {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
.hover:hover button{
    background-color: #f5f0ea; 
    color: #d72d2b;
}
.hover:hover svg{
    color: #d72d2b;
}
.hover2:hover svg{
    color:#10b981;
}

</style>