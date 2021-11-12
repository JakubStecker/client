<template>
    <div class="carousel">
        <slot></slot>

        <button @click="next" class="next">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        </button>

        <button @click="prev" class="prev">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
        </button>
        
    </div>
</template>

<script>
    export default {
        methods: {
            next() {
                this.$emit('next')
            },
            prev() {
                this.$emit('prev')
            }
        }
    }
</script>

<style scoped>
.carousel {
    position: relative;
    width: auto;
    height: auto;
    overflow: hidden;
}
button {
    position: absolute;
    height: 40px;
    width: 50px;
    top: 50%;
    border: none;
    color: #fff;
}
button:focus, button :hover {
    outline: none;
    cursor: pointer;
}
.next {
    right: 0;
    z-index: 0;
}
.prev {
    left: 0;
    z-index: 0;
}
</style>